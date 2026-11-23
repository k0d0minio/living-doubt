import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { eur, prices } from "../lib/prices";

const root = join(__dirname, "..");
const read = (path: string) => readFileSync(join(root, path), "utf8");
const importsPrices = (source: string) => /from\s+["']@\/lib\/prices["']/.test(source);

describe("prices data", () => {
  it("has the single session: 75 minutes, €25", () => {
    assert.deepEqual(prices.single, { minutes: 75, eur: 25 });
  });

  it("has the packs: 5 for €110, 10 for €200", () => {
    assert.deepEqual(prices.packs, [
      { sessions: 5, eur: 110 },
      { sessions: 10, eur: 200 },
    ]);
  });

  it("has the memberships: 4 for €72, 8 for €128 per month", () => {
    assert.deepEqual(prices.memberships, [
      { sessionsPerMonth: 4, eurPerMonth: 72 },
      { sessionsPerMonth: 8, eurPerMonth: 128 },
    ]);
  });

  it("has the gift cards, the amounts and the 12-month validity", () => {
    assert.deepEqual(
      prices.giftCards.map((c) => [c.name, c.eur]),
      [
        ["Nourish experience", 25],
        ["Nourish for 2", 50],
        ["Five Nourish moments", 110],
      ],
    );
    assert.deepEqual(prices.giftAmounts, [50, 100, 150]);
    assert.equal(prices.giftValidMonths, 12);
  });

  it("has group hire for 8 and the 24-hour cancellation rule", () => {
    assert.deepEqual(prices.groupHire, { people: 8 });
    assert.equal(prices.cancelHours, 24);
  });

  it("writes a price as €110", () => {
    assert.equal(eur(110), "€110");
  });
});

describe("one data file", () => {
  it("the prices page reads @/lib/prices", () => {
    assert.ok(importsPrices(read("app/prices/page.tsx")));
  });

  it("the home page reads @/lib/prices", () => {
    assert.ok(importsPrices(read("app/page.tsx")));
  });
});

describe("no payment code", () => {
  it("has no payment package", () => {
    const pkg = JSON.parse(read("package.json"));
    const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
    const payment = deps.filter((d) => /stripe|paypal|mollie|adyen|square|braintree/i.test(d));
    assert.deepEqual(payment, []);
  });

  it("the prices page has no form and no checkout", () => {
    const page = read("app/prices/page.tsx");
    assert.ok(!/<form|checkout/i.test(page));
    assert.ok(existsSync(join(root, "lib/prices.ts")));
  });
});
