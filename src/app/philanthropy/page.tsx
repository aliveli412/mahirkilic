import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { philanthropy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Philanthropy",
};

export default function PhilanthropyPage() {
  return (
    <>
      <PageIntro title="Philanthropy">
        <p>{philanthropy.intro}</p>
        <p className="mt-4">{philanthropy.definition}</p>
      </PageIntro>

      <div className="site-shell space-y-16 py-14 md:py-20">
        {philanthropy.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            {"eyebrow" in section && section.eyebrow ? (
              <p className="text-xs uppercase tracking-[0.2em] text-soft">{section.eyebrow}</p>
            ) : null}
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink">
              {section.title}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            {"bullets" in section && section.bullets ? (
              <div className="mt-6 max-w-3xl">
                <p className="text-sm font-semibold text-ink">{section.bulletsTitle}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {"link" in section && section.link ? (
              <p className="mt-6">
                <a
                  href={section.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-quote underline underline-offset-4"
                >
                  {section.link.label}
                </a>
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );
}
