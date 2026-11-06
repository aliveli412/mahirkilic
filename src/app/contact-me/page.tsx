import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/ContactForm";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact me",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title={contact.title}>
        {contact.paragraphs.map((p) => (
          <p key={p.slice(0, 40)} className="mt-3 first:mt-0">
            {p}
          </p>
        ))}
      </PageIntro>

      <div className="site-shell grid gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
            Get in touch
          </h2>
          <div className="mt-5 space-y-2 text-muted">
            <p>
              <a className="hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>{site.address}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
