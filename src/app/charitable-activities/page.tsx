import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { charitable } from "@/lib/site";

export const metadata: Metadata = {
  title: "Charitable Activities",
};

export default function CharitableActivitiesPage() {
  return (
    <>
      <PageIntro title="Charitable Activities">
        <p>{charitable.quote}</p>
        <p className="mt-4">{charitable.current}</p>
      </PageIntro>

      <div className="site-shell space-y-16 py-14 md:py-20">
        {charitable.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 border-t border-line pt-12 first:border-t-0 first:pt-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink">
              {section.title}
            </h2>
            {"subtitle" in section && section.subtitle ? (
              <p className="mt-2 text-sm text-soft">{section.subtitle}</p>
            ) : null}
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
            {"aims" in section && section.aims ? (
              <div className="mt-6 max-w-3xl">
                <p className="font-semibold text-ink">{section.aimsTitle}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                  {section.aims.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {"presentations" in section && section.presentations ? (
              <div className="mt-6 max-w-3xl">
                <p className="font-semibold text-ink">{section.presentationsTitle}</p>
                <p className="mt-2 text-muted">{section.presentationsIntro}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                  {section.presentations.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-soft">{section.note}</p>
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
