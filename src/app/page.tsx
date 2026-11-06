import Image from "next/image";
import { home, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink text-white">
        <Image
          src={home.hero.image}
          alt="Mahir Kılıç with Stephen Hawking receiving the Honorary Freedom of the City of London"
          fill
          priority
          className="hero-kenburns object-cover object-[center_30%] opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="site-shell relative flex min-h-[88vh] flex-col justify-end pb-14 pt-28 md:pb-20">
          <p className="fade-up text-xs uppercase tracking-[0.28em] text-white/70">
            {site.name}
          </p>
          <h1 className="fade-up-delay mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-[1.1] tracking-tight md:text-6xl">
            {home.hero.title}
          </h1>
          <p className="fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {home.hero.text}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="site-shell grid gap-10 py-16 md:grid-cols-[1fr_auto_1fr] md:gap-12 md:py-20">
          {home.quotes.map((quote, index) => (
            <div key={quote.attribution} className="contents">
              {index === 1 ? <div className="quote-rule hidden md:block" aria-hidden /> : null}
              <article className={`fade-up ${index === 1 ? "fade-up-delay" : ""} text-center`}>
                <div className="mx-auto mb-6 h-56 w-44 overflow-hidden md:h-64 md:w-48">
                  <Image
                    src={quote.portrait}
                    alt={quote.alt}
                    width={377}
                    height={512}
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>
                <p className="mx-auto max-w-sm font-[family-name:var(--font-display)] text-[1.05rem] leading-relaxed text-quote md:text-lg">
                  {quote.text}
                </p>
                <p className="mt-4 text-sm text-muted">— {quote.attribution}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 pt-14 md:pb-24 md:pt-16">
        <div className="site-shell grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              {home.breakdownTitle}
            </h2>
            <ul className="mt-8 space-y-4">
              {home.breakdown.map((item) => (
                <li key={item.label}>
                  <div className="relative h-10 overflow-hidden bg-bar text-sm">
                    <div
                      className="progress-fill absolute inset-y-0 left-0 bg-bar-fill"
                      style={{ width: `${item.percent}%` }}
                    />
                    <div className="relative z-10 flex h-full items-center justify-between px-3 font-medium text-ink">
                      <span>{item.label}</span>
                      <span>{item.percent}%</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {home.roles.map((role) => (
              <div key={role.title}>
                <h3 className="text-base font-semibold leading-snug text-muted">{role.title}</h3>
                <p className="mt-1 text-sm text-soft">{role.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
