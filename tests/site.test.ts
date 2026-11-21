import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { site } from "../lib/site";

describe("site", () => {
  it("is named Nourish", () => {
    assert.equal(site.name, "Nourish");
  });
});
