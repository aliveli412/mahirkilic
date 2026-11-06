import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="site-shell grid gap-8 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink">
            Contact Me
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            For enquiries, donations and sponsorship requests.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p>
            <span className="text-soft">Mob: </span>
            <a className="text-ink hover:underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>{site.address}</p>
          <p>
            <a className="text-ink hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line/80">
        <div className="site-shell flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-soft">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
