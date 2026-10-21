import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-custom flex flex-col justify-between gap-2 py-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>
          Designed &amp; developed by <span className="text-foreground">Musab Iftikhar</span>
        </p>
      </div>
    </footer>
  );
}
