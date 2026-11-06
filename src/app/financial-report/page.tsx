import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { financial } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financial Report",
};

export default function FinancialReportPage() {
  return (
    <>
      <PageIntro title="Financial Report">
        <p>Selected charitable contributions and humanitarian distributions.</p>
      </PageIntro>
      <div className="site-shell space-y-12 py-14 md:py-20">
        {financial.periods.map((period) => (
          <section key={period.title} className="border-t border-line pt-10 first:border-t-0 first:pt-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-ink">
              {period.title}
            </h2>
            <p className="mt-3 text-muted">{period.intro}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-muted">
              {period.items.map((item) => (
                <li key={item.slice(0, 60)}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
