import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { awards } from "@/lib/site";

export const metadata: Metadata = {
  title: "Awards",
};

export default function AwardsPage() {
  return (
    <>
      <PageIntro title={awards.title} />
      <div className="site-shell py-14 md:py-20">
        <ul className="space-y-8">
          {awards.items.map((item) => (
            <li key={item.title} className="border-b border-line pb-8">
              <p className="text-xs uppercase tracking-[0.18em] text-soft">{item.date}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink md:text-3xl">
                {item.title}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
