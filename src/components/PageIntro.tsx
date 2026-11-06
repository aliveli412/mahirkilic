export function PageIntro({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="site-shell py-14 md:py-16">
        <p className="fade-up text-xs uppercase tracking-[0.22em] text-soft">Mahir Kılıç</p>
        <h1 className="fade-up-delay mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="fade-up-delay-2 mt-5 max-w-3xl text-base leading-relaxed text-muted">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
