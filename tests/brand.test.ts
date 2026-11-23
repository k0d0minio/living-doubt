import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, it } from "node:test";

const root = process.cwd();
const read = (path: string) => readFileSync(join(root, path), "utf8");

function walk(dir: string, skip: Set<string>): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    if (skip.has(name)) return [];
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path, skip) : [path];
  });
}

const marks = ["public/brand/nourish-mark.svg", "public/brand/nourish-mark-mono.svg"];

describe("brand mark", () => {
  for (const mark of marks) {
    it(`${mark} is an SVG with no text element`, () => {
      const svg = read(mark);
      assert.match(svg, /^<svg[\s>]/);
      assert.doesNotMatch(svg, /<text[\s>]/);
      assert.doesNotMatch(svg, /<image[\s>]/);
    });
  }

  it("the mono mark takes the colour of the text around it", () => {
    assert.match(read("public/brand/nourish-mark-mono.svg"), /currentColor/);
    assert.doesNotMatch(read("public/brand/nourish-mark-mono.svg"), /#[0-9a-fA-F]{3,8}\b/);
  });

  it("the favicon and the apple icon exist", () => {
    assert.ok(existsSync(join(root, "app/icon.svg")));
    assert.ok(existsSync(join(root, "app/apple-icon.png")));
  });

  it("the screenshot of the mockup is not in the repo", () => {
    const skip = new Set(["node_modules", ".next", ".git"]);
    const shots = walk(root, skip).filter((path) => /screenshot/i.test(path));
    assert.deepEqual(shots.map((path) => relative(root, path)), []);
  });
});

describe("design tokens", () => {
  const css = read("app/globals.css");
  const theme = css.match(/@theme\s*\{[^}]*\}/)?.[0] ?? "";

  it("the theme has the colours, fonts, type scale and section spacing", () => {
    const names = [
      "--color-ink:",
      "--color-ink-soft:",
      "--color-bronze:",
      "--color-wood:",
      "--color-cream:",
      "--font-display:",
      "--font-body:",
      ...["display", "h1", "h2", "h3", "label", "body", "small"].map((s) => `--text-${s}:`),
      "--spacing-section:",
      "--spacing-section-sm:",
    ];
    for (const name of names) assert.ok(theme.includes(name), `${name} is missing`);
  });

  it("no file in app/ or components/ hard-codes a hex colour outside the theme", () => {
    const code = /\.(tsx?|jsx?|css|mdx?)$/;
    const files = [...walk(join(root, "app"), new Set()), ...walk(join(root, "components"), new Set())]
      .filter((path) => code.test(path));
    const hex = /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b/;
    const offenders = files.filter((path) => {
      const text = readFileSync(path, "utf8");
      return hex.test(path.endsWith("globals.css") ? text.replace(theme, "") : text);
    });
    assert.deepEqual(offenders.map((path) => relative(root, path)), []);
  });
});
