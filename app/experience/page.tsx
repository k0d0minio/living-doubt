import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "The experience",
  description:
    "Why Max started Nourish, the suggested 75-minute session, and what the sauna, the ice bath and contrast therapy can do for you.",
};

const story = [
  "Nourish began when I started to give my body the attention it deserves. At 55, after many injuries from football, skiing and swimming, and a few accidents, I had to find a softer way to look after myself.",
  "I started with stretching, body movement and ice baths. Soon I noticed a big change in my days: my knees felt better, I was more flexible and I slept better at night. When I added the sauna, my body loosened up and I felt energised and strong again.",
  "Today my mornings are stretching, body-weight training, sauna and ice bath. I invite you to connect a little deeper with yourself at Nourish and feel what your body needs. This is your time: leave the worries at the door, disconnect and reconnect.",
];

type Step = { name: string; minutes?: number; kind: "hot" | "cold" | "rest" };

const round: Step[] = [
  { name: "Sauna", minutes: 15, kind: "hot" },
  { name: "Shower", kind: "rest" },
  { name: "Ice bath", minutes: 3, kind: "cold" },
];

const finish: Step[] = [
  { name: "Shower", kind: "rest" },
  { name: "Relax", kind: "rest" },
];

const saunaPoints = [
  "Many people feel calmer and less stressed.",
  "The heat relaxes tense muscles and joints.",
  "It can help you sleep better.",
  "The warmth gets your blood moving.",
  "Many people use it to recover after exercise.",
];

const iceBathPoints = [
  "It can ease sore and tired muscles.",
  "Many people feel a lift in energy afterwards.",
  "It can help your body recover after exercise.",
  "You learn to stay calm and breathe through the cold.",
  "Many people feel clear and focused when they step out.",
];

const medicalNote =
  "Ask your doctor first if you are pregnant or have a heart condition or high blood pressure.";

const kindStyle: Record<Step["kind"], string> = {
  hot: "border-bronze bg-bronze/15",
  cold: "border-cream/60 bg-cream/10",
  rest: "border-cream/20",
};

function StepCard({ step }: { step: Step }) {
  return (
    <li className={`rounded-lg border px-4 py-3 ${kindStyle[step.kind]}`}>
      <span className="font-display text-lg">{step.name}</span>
      {step.minutes ? <span className="block text-sm opacity-80">{step.minutes} min</span> : null}
    </li>
  );
}

function Photo({ image }: { image: (typeof images)["sauna"] }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-left"
      />
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <Section id="why" label="Why Nourish" title="A softer way to care for your body">
        <div className="max-w-2xl space-y-4">
          {story.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="font-display text-lg">Max</p>
        </div>
      </Section>

      <Section id="session" label="The session" title="The suggested session">
        <p className="mb-6 max-w-2xl">
          Your session is 75 minutes. This is the rhythm we suggest. Listen to your body and
          change it as you need.
        </p>
        <ol className="grid gap-4 md:grid-cols-4">
          {[1, 2, 3].map((n) => (
            <li key={n}>
              <p className="mb-2 text-sm uppercase tracking-widest opacity-80">Round {n}</p>
              <ol className="space-y-2">
                {round.map((step) => (
                  <StepCard key={step.name} step={step} />
                ))}
              </ol>
            </li>
          ))}
          <li>
            <p className="mb-2 text-sm uppercase tracking-widest opacity-80">Finish</p>
            <ol className="space-y-2">
              {finish.map((step) => (
                <StepCard key={step.name} step={step} />
              ))}
            </ol>
          </li>
        </ol>
      </Section>

      <Section id="sauna" label="Sauna" title="The heat">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p>
              The sauna heats the air to between 80 and 100 °C. After a few minutes most people
              feel the warmth deep in their muscles.
            </p>
            <Points items={saunaPoints} />
          </div>
          <Photo image={images.sauna} />
        </div>
      </Section>

      <Section id="ice-bath" label="Ice bath" title="The cold">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p>An ice bath, or cold plunge, is a short dip in very cold water.</p>
            <Points items={iceBathPoints} />
            <p>
              <strong>Your first time?</strong> Stay in for 30 seconds to 3 minutes. That is
              plenty.
            </p>
          </div>
          <Photo image={images.stove} />
        </div>
      </Section>

      <Section id="contrast" label="Contrast therapy" title="Why both?">
        <div className="max-w-2xl space-y-4">
          <p>
            Heat opens your blood vessels and cold narrows them again. Going from one to the
            other gets your circulation moving, and many people find that the two together
            feel better than either one alone.
          </p>
          <p>
            <strong>Why the sauna first?</strong> Going from hot to cold is easier for your body
            than going from cold to hot. The sauna warms and relaxes you, then the ice bath
            wakes you up. Take a shower between the two: it rinses off the sweat, and it is a
            house rule.
          </p>
        </div>
      </Section>

      <Section id="first-time" label="First time?" title="Breathe and relax, you got this">
        <div className="max-w-2xl space-y-4">
          <p>
            The heat can feel strange at first. Relax your mind, relax your body and breathe.
            Always listen to your body, and step out when the heat is too much. This should feel
            good, not like a test.
          </p>
          <p>
            In the ice bath, do the same: breathe slowly, in through the nose and out through
            the mouth, and keep your focus on your breath.
          </p>
          <p className="border-l-2 border-bronze pl-4 text-sm">{medicalNote}</p>
        </div>
      </Section>

      <Section id="book" label="Book" title="Ready for your first session?">
        <BookButton />
      </Section>
    </>
  );
}
