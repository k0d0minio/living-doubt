import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { company, complaintsBook } from "../lib/company";

describe("company", () => {
  it("has the identity of the company card", () => {
    assert.equal(company.name, "Living Doubt Unipessoal Lda");
    assert.deepEqual(company.address, [
      "Avenida Conselheiro Barjona de Freitas, n.º 22, 2º Esq.",
      "1500-204 Lisboa",
      "Portugal",
    ]);
    assert.equal(company.nif, "PT518814858");
    assert.equal(company.registry, "Cons. Reg. Comercial Lisboa 518814858");
    assert.equal(company.capital, "€100,00");
  });

  it("links the official complaints book and its logo", () => {
    assert.equal(complaintsBook.url, "https://www.livroreclamacoes.pt");
    assert.ok(statSync(join("public", complaintsBook.logo)).isFile());
  });
});

/** Each source file of the app: the files that can set a cookie or load a tracker. */
function sources(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sources(path);
    return /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(name) ? [path] : [];
  });
}

describe("the site sets no cookie", () => {
  const files = [
    ...["app", "components", "lib"].flatMap(sources),
    ...["middleware.ts", "proxy.ts", "next.config.ts", "next.config.mjs", "next.config.js"].filter((f) => {
      try {
        return statSync(f).isFile();
      } catch {
        return false;
      }
    }),
  ];
  const forbidden: [string, RegExp][] = [
    ["a cookie", /\bcookies\s*\(|document\.cookie|set-cookie|\.cookies\.(set|get)/i],
    ["analytics or tracking", /@vercel\/analytics|@vercel\/speed-insights|googletagmanager|gtag\s*\(|google-analytics|plausible|posthog|segment\.com|hotjar|fbq\s*\(/i],
  ];

  it("finds source files to check", () => {
    assert.ok(files.length > 0);
  });

  for (const [what, pattern] of forbidden) {
    it(`has no code that uses ${what}`, () => {
      const hits = files.filter((f) => pattern.test(readFileSync(f, "utf8")));
      assert.deepEqual(hits, [], `these files use ${what}: ${hits.join(", ")}`);
    });
  }

  it("has no analytics or tracking package", () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8"));
    const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
    const trackers = deps.filter((d) => /analytics|speed-insights|gtag|tagmanager|posthog|plausible|segment|hotjar|mixpanel/i.test(d));
    assert.deepEqual(trackers, []);
  });
});
