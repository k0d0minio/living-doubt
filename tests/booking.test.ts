import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { bookingHref } from "../lib/booking";

describe("Book button target", () => {
  it("opens the contact block when the booking address is empty", () => {
    assert.equal(bookingHref(""), "#contact");
    assert.equal(bookingHref("   "), "#contact");
  });

  it("goes to the booking address when it is set", () => {
    assert.equal(bookingHref("https://book.example.com/nourish"), "https://book.example.com/nourish");
  });
});
