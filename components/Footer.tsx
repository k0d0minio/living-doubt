import Image from "next/image";
import Link from "next/link";
import { contactAnchor } from "@/lib/booking";
import { company } from "@/lib/company";
import { site } from "@/lib/site";

const complaintsBookUrl = "https://www.livroreclamacoes.pt";

/** The footer of each page. Its contact block is the target of the Book button. */
export function Footer() {
  return (
    <footer className="border-t border-ink-soft bg-ink-soft text-small text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-section-sm md:grid-cols-4">
        <div>
          <Image src="/brand/nourish-mark.svg" alt="" width={56} height={56} />
          <p className="mt-4 font-display text-lg uppercase tracking-[0.3em] text-cream">{site.name}</p>
          <p className="mt-1">Sauna and ice bath in {site.town}</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-label uppercase text-bronze">Opening hours</h2>
          <p>Every day</p>
          <p>{site.hours}</p>
        </div>

        <div id={contactAnchor} className="scroll-mt-24">
          <h2 className="mb-3 font-display text-label uppercase text-bronze">Contact</h2>
          <ul className="space-y-1">
            <li>
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:text-cream hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:text-cream hover:underline">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsappUrl} className="underline-offset-4 hover:text-cream hover:underline">
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-3">{site.town}, Portugal</p>
        </div>

        <div>
          <h2 className="mb-3 font-display text-label uppercase text-bronze">Legal</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy" className="underline-offset-4 hover:text-cream hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <a href={complaintsBookUrl} className="underline-offset-4 hover:text-cream hover:underline">
                Livro de Reclamações
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink">
        <div className="mx-auto max-w-6xl space-y-1 px-6 py-6 text-cream/70">
          <p>
            © {new Date().getFullYear()} {company.name}. {company.address.join(", ")}.
          </p>
          <p>
            NIF {company.nif} · {company.registry} · Share capital {company.capital}
          </p>
        </div>
      </div>
    </footer>
  );
}
