import math, sys
# Coordinates measured on the 2x crop of the mockup; centre of the ring = (505,495).
CX, CY, R = 505, 495, 428
OX, OY = 450 - CX, 450 - CY          # move the centre to (450,450) in a 900 box

def P(x, y): return (x + OX, y + OY)
def f(v): return f"{v:.1f}".rstrip("0").rstrip(".")
def pt(p): return f"{f(p[0])} {f(p[1])}"

def ring_pt(deg):
    a = math.radians(deg)
    return P(CX + R * math.cos(a), CY + R * math.sin(a))

def strokes(sw):
    gap = 5.6                          # half of the top gap, degrees
    # Right arm: from the top gap clockwise down to the wave.
    a0, a1 = -90 + gap, 19
    s, e = ring_pt(a0), ring_pt(a1)
    right = (f"M{pt(s)}A{R} {R} 0 0 1 {pt(e)}"
             f"C{pt(P(870,612))} {pt(P(835,596))} {pt(P(790,598))}"
             f"C{pt(P(700,602))} {pt(P(640,700))} {pt(P(515,704))}")
    # Left arm: from the top gap anticlockwise round the bottom, then the bar back left.
    b0, b1 = -90 - gap, 40.5
    s2, e2 = ring_pt(b0), ring_pt(b1)
    left = (f"M{pt(s2)}A{R} {R} 0 1 0 {pt(e2)}"
            f"L{pt(P(515, e2[1] - OY))}")
    return [right, left]

def cr_path(pts):
    """Catmull-Rom through pts, as cubic segments (no initial M)."""
    out = []
    for i in range(len(pts) - 1):
        p0 = pts[i - 1] if i > 0 else pts[i]
        p1, p2 = pts[i], pts[i + 1]
        p3 = pts[i + 2] if i + 2 < len(pts) else p2
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        out.append(f"C{pt(c1)} {pt(c2)} {pt(p2)}")
    return "".join(out)

def bez(p0, p1, p2, p3, t):
    u = 1 - t
    return tuple(u**3*a + 3*u*u*t*b + 3*u*t*t*c + t**3*d for a, b, c, d in zip(p0, p1, p2, p3))

def flame(ctrl, wmax, n=14, scale=1.0):
    """A tapered S stroke: centre line = chain of cubic beziers, width = wmax*profile."""
    # sample the centre line
    segs = [ctrl[i:i+4] for i in range(0, len(ctrl) - 1, 3)]
    cl = []
    for si, sg in enumerate(segs):
        for k in range(n):
            cl.append(bez(*sg, k / n))
    cl.append(segs[-1][3])
    m = len(cl) - 1
    L, Rt = [], []
    for i, p in enumerate(cl):
        a = cl[max(i - 1, 0)]; b = cl[min(i + 1, m)]
        dx, dy = b[0] - a[0], b[1] - a[1]; d = math.hypot(dx, dy) or 1
        nx, ny = -dy / d, dx / d
        t = i / m
        w = wmax * scale * (math.sin(math.pi * t) ** 0.9) * (1.0 if t < .5 else 1 - 0.25 * (t - .5))
        L.append(P(p[0] + nx * w / 2, p[1] + ny * w / 2))
        Rt.append(P(p[0] - nx * w / 2, p[1] - ny * w / 2))
    pts = L + Rt[::-1][1:]
    return f"M{pt(pts[0])}" + cr_path(pts) + "Z"

FLAMES = [
    # big (right)
    ([(362,152),(300,260),(330,370),(420,450),(500,520),(500,660),(368,832)], 50),
    # middle
    ([(242,302),(200,400),(270,470),(330,540),(390,610),(360,720),(282,818)], 42),
    # small (left)
    ([(172,422),(150,500),(215,550),(250,600),(290,660),(270,720),(232,772)], 32),
]

def svg(fill_stroke, sw=40, bg=None, size=None, title="Nourish", pad=10):
    d_strokes = strokes(sw)
    flames = [flame(c, w, scale=sw / 40) for c, w in FLAMES]
    attrs = f' width="{size}" height="{size}"' if size else ""
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-pad} {-pad} {900+2*pad} {900+2*pad}"{attrs} role="img" aria-label="{title}">']
    if bg:
        out.append(f'<rect x="{-pad}" y="{-pad}" width="{900+2*pad}" height="{900+2*pad}" rx="{(900+2*pad)//5}" fill="{bg}"/>')
    out.append(f'<g fill="none" stroke="{fill_stroke}" stroke-width="{sw}" stroke-linejoin="miter" stroke-miterlimit="8">')
    out += [f'<path d="{d}"/>' for d in d_strokes]
    out.append(f'</g><g fill="{fill_stroke}">')
    out += [f'<path d="{d}"/>' for d in flames]
    out.append("</g></svg>")
    return "\n".join(out) + "\n"

if __name__ == "__main__":
    kind, path = sys.argv[1], sys.argv[2]
    BRONZE, INK = "#b08560", "#0e0d0c"
    if kind == "bronze": s = svg(BRONZE)
    elif kind == "mono": s = svg("currentColor")
    elif kind == "icon": s = svg(BRONZE, sw=64, bg=INK, pad=80)
    elif kind == "preview": s = svg(BRONZE, bg=INK, pad=80)
    open(path, "w").write(s)
