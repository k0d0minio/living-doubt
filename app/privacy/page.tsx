import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { company } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} uses the personal data that you send to us.`,
};

const link = "underline underline-offset-4 hover:text-cream";

export default function PrivacyPage() {
  return (
    <Section label="Privacy" title="Privacy policy" className="text-cream/80">
      <div className="max-w-3xl space-y-10">
        <div>
          <h3 className="mb-3 font-display text-lg uppercase text-cream">Who is responsible</h3>
          <p>The controller of your personal data is:</p>
          <address className="mt-3 not-italic">
            {company.name}
            <br />
            {company.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            NIF {company.nif} · {company.registry}
            <br />
            Email:{" "}
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>
          </address>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg uppercase text-cream">What we collect</h3>
          <p>
            This site has no forms and no accounts. It sets no cookies and loads no analytics or
            tracking. We get personal data only when you send it to us yourself, by email or by
            WhatsApp: usually your name, your contact details and your message.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg uppercase text-cream">Why we use it</h3>
          <p>
            We use your message only to answer you and to arrange your visit. The legal basis is
            the steps that you ask us to take before a booking, and our legitimate interest in
            answering you. We do not sell your data and we do not use it for marketing. We keep
            it only as long as we need it for that purpose, or as long as the law tells us to.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg uppercase text-cream">Your rights</h3>
          <p>
            Under the GDPR you can ask us for access to your data, its correction, its erasure or
            its portability, and you can object to its use or ask us to limit it. Send your
            request to{" "}
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>
            . You can also make a complaint to the Portuguese data protection authority, the{" "}
            <a href="https://www.cnpd.pt" className={link}>
              CNPD
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg uppercase text-cream">Booking</h3>
          <p>
            When online booking comes, an external booking provider will handle the booking and
            the payment. That provider will have its own privacy policy, and we will link to it
            here.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg uppercase text-cream">Contact</h3>
          <p>
            Questions about this policy:{" "}
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>{" "}
            or {site.phone}.
          </p>
        </div>
      </div>
    </Section>
  );
}
