import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";
import { prices } from "@/lib/prices";
import { site } from "@/lib/site";

const pillars = [
  {
    label: "Sauna",
    image: images.sauna,
    text: "Wood, heat and quiet. Let your muscles loosen and your mind slow down.",
  },
  {
    label: "Ice bath",
    image: images.iceBath,
    text: "Cold water and a few calm breaths. Many people feel awake and clear after.",
  },
  {
    label: "Rest",
    image: images.steam,
    text: "Between the rounds, shower, sit and breathe. Take the time your body asks for.",
  },
];

const routine = [
  "15 min sauna",
  "Cool down and shower",
  "3 min ice bath",
];

const faqs = [
  {
    q: "What do I bring?",
    a: "Two towels, slippers, a water bottle and your swimwear.",
  },
  {
    q: "It is my first time. What do I do?",
    a: "Go slowly. In the ice bath, 30 seconds to 3 minutes is enough. Breathe and relax, you got this.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, up to 24 hours before your session.",
  },
  {
    q: "Is there parking?",
    a: "Yes. A large free car park, one minute on foot.",
  },
  {
    q: "When are you open?",
    a: `From ${site.hours}.`,
  },
];

const linkClass =
  "inline-block border-b border-bronze pb-0.5 text-small uppercase tracking-[0.2em] text-bronze transition-colors hover:text-cream";

export default function Home() {
  const fromMembership = Math.min(...prices.memberships.map((m) => m.eurPerMonth));
  const fromGiftCard = Math.min(...prices.giftCards.map((g) => g.eur));

  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
          <h1 className="font-display text-display font-light uppercase">{site.name}</h1>
          <p className="mt-4 text-label uppercase text-bronze">Recovery garden · Sauna &amp; ice bath</p>
          <p className="mt-6 max-w-xl text-body text-cream/90">
            A private sauna and ice bath in {site.town}, open from {site.hours}.
          </p>
          <BookButton className="mt-8" />
        </div>
      </section>

      {/* 2. Intro */}
      <Section id="intro" label="Why Nourish">
        <p className="max-w-3xl text-h3 font-light leading-relaxed">
          Nourish was born the moment I started to give importance to my body. After years of
          injuries from soccer, skiing and swimming, stretching, ice baths and the sauna changed
          how I feel every day. This is your time: leave the worries at the door, disconnect and
          reconnect with yourself.
        </p>
        <p className="mt-6 text-small uppercase tracking-[0.2em] text-cream/70">Max, founder</p>
      </Section>

      {/* 3. Three pillars */}
      <Section id="pillars" label="Sauna · Ice bath · Rest" title="Heat, cold and rest">
        <ul className="grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.label}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-label uppercase text-bronze">{p.label}</h3>
              <p className="mt-2 text-body text-cream/85">{p.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. The session */}
      <Section id="session" label="The session" title={`${prices.single.minutes} minutes`}>
        <p className="max-w-2xl text-body text-cream/85">
          A suggested routine, for {prices.groupHire.people} people at most:
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {routine.map((step, i) => (
            <li key={step} className="border-t border-wood pt-4">
              <span className="text-label text-bronze">0{i + 1}</span>
              <p className="mt-2 text-body">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-body text-cream/85">
          Three rounds. Always finish with the ice bath.
        </p>
        <Link href="/experience" className={`${linkClass} mt-8`}>
          The experience
        </Link>
      </Section>

      {/* 5. Prices teaser */}
      <Section id="prices" label="Prices" title="Simple prices">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-t border-wood pt-4">
            <dt className="text-label uppercase text-bronze">Single session</dt>
            <dd className="mt-2 text-h3">€{prices.single.eur}</dd>
            <dd className="text-small text-cream/70">{prices.single.minutes} minutes</dd>
          </div>
          <div className="border-t border-wood pt-4">
            <dt className="text-label uppercase text-bronze">Packs</dt>
            {prices.packs.map((pack) => (
              <dd key={pack.sessions} className="mt-2 text-body">
                {pack.sessions} sessions · €{pack.eur}
              </dd>
            ))}
          </div>
          <div className="border-t border-wood pt-4">
            <dt className="text-label uppercase text-bronze">Memberships</dt>
            <dd className="mt-2 text-h3">from €{fromMembership} / month</dd>
          </div>
          <div className="border-t border-wood pt-4">
            <dt className="text-label uppercase text-bronze">Gift cards</dt>
            <dd className="mt-2 text-h3">from €{fromGiftCard}</dd>
          </div>
        </dl>
        <Link href="/prices" className={`${linkClass} mt-10`}>
          All prices
        </Link>
      </Section>

      {/* 6. FAQ teaser */}
      <Section id="faq" label="FAQ" title="Good to know">
        <dl className="max-w-3xl divide-y divide-wood/50">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-display text-h3 font-light">{f.q}</dt>
              <dd className="mt-2 text-body text-cream/85">{f.a}</dd>
            </div>
          ))}
        </dl>
        <Link href="/faq" className={`${linkClass} mt-8`}>
          All questions
        </Link>
      </Section>

      {/* 7. Location */}
      <Section id="location" label="Location" title={site.town}>
        <p className="max-w-2xl text-body text-cream/85">
          Nourish is in {site.town}. There is a large free car park, one minute on foot.
        </p>
      </Section>

      {/* 8. Final call to action */}
      <Section id="book" label="Book" title="This is your time">
        <p className="max-w-2xl text-body text-cream/85">
          Leave the daily stress at the door. Book a session for {prices.single.minutes} minutes
          of heat, cold and rest.
        </p>
        <BookButton className="mt-8" />
      </Section>
    </>
  );
}
