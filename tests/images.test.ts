import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { images } from "../lib/images";

describe("images", () => {
  const entries = Object.entries(images);

  it("has the five photos of the contract", () => {
    assert.deepEqual(Object.keys(images).sort(), ["hero", "iceBath", "sauna", "steam", "stove"]);
  });

  for (const [key, image] of entries) {
    it(`${key} has a file, alt text, a source, a licence and the placeholder mark`, () => {
      assert.ok(image.src.startsWith("/images/"));
      assert.ok(existsSync(join(process.cwd(), "public", image.src)), `missing file ${image.src}`);
      assert.ok(image.alt.length > 10);
      assert.ok(image.source.length > 0);
      assert.ok(image.licence.length > 0);
      assert.equal(image.placeholder, true);
    });
  }
});
