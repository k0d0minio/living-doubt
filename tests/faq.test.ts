import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { faqJsonLd, faqs, faqText, houseRules } from "../app/faq/content";

const answer = (id: string) => {
  const faq = faqs.find((f) => f.id === id);
  assert.ok(faq, `no question ${id}`);
  return faqText(faq);
};

describe("faq", () => {
  it("has the 13 questions of the ticket, each with an answer", () => {
    assert.deepEqual(
      faqs.map((f) => f.id),
      [
        "offer",
        "bring",
        "first-time",
        "stove",
        "shower",
        "parking",
        "cancellation",
        "group-hire",
        "toilet",
        "talking",
        "capacity",
        "hours",
        "entry",
      ],
    );
    for (const f of faqs) assert.ok(faqText(f).length > 0, f.id);
  });

  it("has the 7 house rules", () => {
    assert.equal(houseRules.length, 7);
  });

  it("states the hours, the capacity, the group size and the cancellation", () => {
    assert.match(answer("hours"), /07:00 to 23:00/);
    assert.match(answer("capacity"), /\b8 people\b/);
    assert.match(answer("group-hire"), /\b8 people\b/);
    assert.match(answer("cancellation"), /24 hours/);
    assert.match(answer("entry"), /you get your entry code when you book/i);
  });

  it("builds one FAQPage with a Question and an acceptedAnswer for each entry", () => {
    const ld = faqJsonLd();
    assert.equal(ld["@context"], "https://schema.org");
    assert.equal(ld["@type"], "FAQPage");
    assert.equal(ld.mainEntity.length, faqs.length);
    ld.mainEntity.forEach((q, i) => {
      assert.equal(q["@type"], "Question");
      assert.equal(q.name, faqs[i].question);
      assert.equal(q.acceptedAnswer["@type"], "Answer");
      assert.ok(q.acceptedAnswer.text.length > 0);
    });
  });
});
