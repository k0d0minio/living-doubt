import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { faqJsonLd, faqs, houseRules } from "./content";

export const metadata: Metadata = {
  title: "FAQ and house rules",
  description: `Answers to the common questions about ${site.name}, and the house rules.`,
};

export default function FaqPage() {
  const jsonLd = JSON.stringify(faqJsonLd()).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <Section id="faq" label="FAQ" title="Questions and answers">
        <div className="divide-y divide-wood/30 border-y border-wood/30">
          {faqs.map((faq) => (
            <details key={faq.id} id={faq.id} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span aria-hidden="true" className="text-bronze transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-3 space-y-3 font-body text-ink-soft">
                {faq.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {faq.list && (
                  <ul className="list-disc space-y-1 pl-6">
                    {faq.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {faq.contact && (
                  <p className="flex flex-wrap gap-x-6 gap-y-2">
                    <a className="text-bronze underline underline-offset-4" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                    <a className="text-bronze underline underline-offset-4" href={site.whatsappUrl}>
                      WhatsApp {site.phone}
                    </a>
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section id="house-rules" label="House rules" title="Our house rules">
        <ol className="list-decimal space-y-2 pl-6 font-body text-ink-soft marker:text-bronze">
          {houseRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </Section>
    </>
  );
}
