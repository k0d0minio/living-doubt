// The one home of the prices and conditions of Nourish (JAM-493).
// Source: `nourish 2.docx` of the client. A price change is one edit here.
// The prices page and the home teaser read this file.

export const prices = {
  single: { minutes: 75, eur: 25 },
  packs: [
    { sessions: 5, eur: 110 },
    { sessions: 10, eur: 200 },
  ],
  memberships: [
    { sessionsPerMonth: 4, eurPerMonth: 72 },
    { sessionsPerMonth: 8, eurPerMonth: 128 },
  ],
  membershipConditions: [
    "3 months of first commitment, billed monthly.",
    "Personal: the membership is for one person.",
    "Each visit needs a booking.",
    "Unused sessions of a month end with that billing month.",
    "After the first commitment, cancel with 30 days of notice.",
  ],
  giftCards: [
    { name: "Nourish experience", eur: 25, note: "One 75-minute session." },
    { name: "Nourish for 2", eur: 50, note: "A shared session for two." },
    { name: "Five Nourish moments", eur: 110, note: "A 5-session pack." },
  ],
  giftAmounts: [50, 100, 150],
  giftValidMonths: 12,
  groupHire: { people: 8 },
  cancelHours: 24,
} as const;

/** A price in euro, in the format of the site: `€110`. */
export function eur(amount: number): string {
  return `€${amount}`;
}
