import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { freemasonry } from "@/lib/site";

export const metadata: Metadata = {
  title: "Freemasonry",
};

export default function FreemasonryPage() {
  return (
    <>
      <PageIntro title="Freemasonry">
        <p>{freemasonry.intro}</p>
        <ul className="mt-4 space-y-1 text-sm text-muted">
          {freemasonry.pillars.map((p) => (
            <li key={p}>— {p}</li>
          ))}
        </ul>
      </PageIntro>

      <div className="site-shell space-y-16 py-14 md:py-20">
        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            {freemasonry.craft.title}
          </h2>
          <p className="mt-2 text-sm text-soft">{freemasonry.craft.currentTitle}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {freemasonry.craft.lodges.map((lodge) => (
              <article key={lodge.name}>
                <h3 className="text-lg font-semibold text-ink">{lodge.name}</h3>
                <p className="mt-1 text-sm text-soft">{lodge.note}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  {lodge.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            {freemasonry.supreme.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">{freemasonry.supreme.subtitle}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {freemasonry.supreme.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            Progressive Orders
          </h2>
          <h3 className="mt-6 text-xl font-semibold">{freemasonry.promotions.title}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {freemasonry.promotions.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            {freemasonry.mark.title}
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 text-muted">
            {freemasonry.mark.summary.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ol className="mt-8 space-y-3 border-l border-line pl-5">
            {freemasonry.mark.timeline.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full bg-ink" />
                <p className="font-medium text-ink">{item.role}</p>
                <p className="text-sm text-soft">{item.date}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            {freemasonry.ram.title}
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 text-muted">
            {freemasonry.ram.summary.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ol className="mt-8 space-y-3 border-l border-line pl-5">
            {freemasonry.ram.timeline.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[1.4rem] top-1.5 h-2 w-2 rounded-full bg-ink" />
                <p className="font-medium text-ink">{item.role}</p>
                <p className="text-sm text-soft">{item.date}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          {freemasonry.otherOrders.map((order) => (
            <article key={order.title}>
              <h3 className="text-lg font-semibold text-ink">{order.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {order.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
