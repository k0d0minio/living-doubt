import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

// The page imports components of other tickets, so the test reads its source as text.
const source = readFileSync(new URL("../app/experience/page.tsx", import.meta.url), "utf8");
const text = source.replace(/\s+/g, " ");

describe("experience page", () => {
  it("sets a page title and a description", () => {
    assert.match(source, /export const metadata[\s\S]*title: "[^"]+"[\s\S]*description:\s*"[^"]+"/);
  });

  it("has the medical note, word for word", () => {
    assert.ok(
      text.includes(
        "Ask your doctor first if you are pregnant or have a heart condition or high blood pressure.",
      ),
    );
  });

  it("makes none of the strong health claims", () => {
    assert.doesNotMatch(text, /detox/i);
    assert.doesNotMatch(text, /\d\s*%/);
    assert.doesNotMatch(text, /weight|burn fat|calories/i);
    assert.doesNotMatch(text, /\bheal(s|ing|ed)?\b|\bcures?\b|guarantee/i);
  });

  it("has no repeated paragraph", () => {
    const paragraphs = [...source.matchAll(/"([^"]{40,})"/g)].map((m) => m[1]);
    assert.equal(new Set(paragraphs).size, paragraphs.length);
    assert.ok(!/Reduces stress and elevates mood[\s\S]*Reduces stress and elevates mood/.test(text));
  });

  it("has the seven sections in order", () => {
    const ids = [...source.matchAll(/<Section id="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(ids, ["why", "session", "sauna", "ice-bath", "contrast", "first-time", "book"]);
  });
});
