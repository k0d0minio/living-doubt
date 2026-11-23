import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { Section } from "@/components/Section";
import { eur, prices } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Prices of Nourish: a 75-minute session, packs, memberships, gift cards and group hire.",
};

function PriceCard(props: {
  title: string;
  price: string;
  unit?: string;
  note?: string;
  cta: string;
}) {
  return (
    <li className="flex flex-col gap-4 border border-wood/40 bg-ink-soft p-8">
      <h3 className="text-h3 text-cream">{props.title}</h3>
      <p className="font-display text-h2 text-bronze">
        {props.price}
        {props.unit ? (
          <span className="ml-2 font-body text-small text-cream/70">{props.unit}</span>
        ) : null}
      </p>
      {props.note ? <p className="text-body text-cream/80">{props.note}</p> : null}
      <div className="mt-auto pt-2">
        <BookButton label={props.cta} />
      </div>
    </li>
  );
}

export default function PricesPage() {
  const { single, packs, memberships, membershipConditions, giftCards } = prices;

  return (
    <>
      <Section id="single" label="Prices" title="One session">
        <ul className="grid gap-6 md:max-w-md">
          <PriceCard
            title={`${single.minutes}-minute session`}
            price={eur(single.eur)}
            note="Sauna, ice bath and rest, at your own pace."
            cta="Book"
          />
        </ul>
      </Section>

      <Section id="packs" label="Packs" title="Packs of sessions">
        <ul className="grid gap-6 md:grid-cols-2">
          {packs.map((pack) => (
            <PriceCard
              key={pack.sessions}
              title={`${pack.sessions} sessions`}
              price={eur(pack.eur)}
              cta="Buy"
            />
          ))}
        </ul>
      </Section>

      <Section id="memberships" label="Memberships" title="Memberships">
        <ul className="grid gap-6 md:grid-cols-2">
          {memberships.map((m) => (
            <PriceCard
              key={m.sessionsPerMonth}
              title={`${m.sessionsPerMonth} sessions per month`}
              price={eur(m.eurPerMonth)}
              unit="per month"
              cta="Buy"
            />
          ))}
        </ul>
        <h3 className="mt-10 text-h3 text-cream">Conditions</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-cream/80">
          {membershipConditions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section id="gift-cards" label="Gift cards" title="Gift cards">
        <ul className="grid gap-6 md:grid-cols-3">
          {giftCards.map((card) => (
            <PriceCard
              key={card.name}
              title={card.name}
              price={eur(card.eur)}
              note={card.note}
              cta="Buy"
            />
          ))}
        </ul>
        <p className="mt-8 text-body text-cream/80">
          Or choose an amount: {prices.giftAmounts.map(eur).join(", ")}.
        </p>
        <p className="mt-2 text-body text-cream/80">
          Each gift card is valid for {prices.giftValidMonths} months from purchase.
        </p>
        <div className="mt-6">
          <BookButton label="Buy a gift card" />
        </div>
      </Section>

      <Section id="group-hire" label="Group hire" title="The sauna for your group">
        <p className="max-w-prose text-body text-cream/80">
          Book the sauna for a group of {prices.groupHire.people}. Contact Max for a date
          and a price.
        </p>
        <div className="mt-6">
          <BookButton label="Contact Max" />
        </div>
      </Section>

      <Section id="cancellation" label="Cancellation" title="Cancel or change a booking">
        <p className="max-w-prose text-body text-cream/80">
          Cancel or change a booking at least {prices.cancelHours} hours before the
          session.
        </p>
      </Section>
    </>
  );
}
