import { useEffect, useState } from "react";
import { nav, site, waLink, hero } from "../data";
import { WhatsAppIcon } from "./Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-500 ${
          scrolled && !open ? "bg-noir shadow-[0_10px_40px_-18px_rgba(0,0,0,0.6)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          {/* marca */}
          <a
            href="#topo"
            className="font-display text-[1.55rem] leading-none tracking-[-0.02em] text-ivory"
            onClick={() => setOpen(false)}
          >
            Vênus <em className="text-blush">Belle</em>
          </a>

          {/* navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-[13px] font-medium uppercase tracking-[0.18em] text-ivory/80 transition-colors duration-300 hover:text-blush"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(hero.ctaPrimario.mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-blush px-5 py-2.5 text-sm font-semibold text-noir transition-all duration-300 hover:bg-ivory hover:shadow-[0_10px_30px_-12px_rgba(201,169,154,0.7)] sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>

            {/* botão do menu mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-300 hover:border-blush lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-current transition-all duration-500 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-current transition-all duration-500 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* menu mobile fullscreen */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-[85] flex flex-col bg-noir transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Menu" className="flex flex-1 flex-col justify-center gap-1 px-8">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 py-3 transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${140 + i * 90}ms` : "0ms" }}
            >
              <span className="font-display text-sm italic text-blush">0{i + 1}</span>
              <span className="font-display text-5xl tracking-[-0.02em] text-ivory transition-colors duration-300 group-hover:text-blush">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div
          className={`flex flex-col gap-6 border-t border-ivory/10 px-8 py-8 transition-all duration-700 ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: open ? "520ms" : "0ms" }}
        >
          <a
            href={waLink(hero.ctaPrimario.mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="inline-flex w-max items-center gap-2.5 rounded-full bg-blush px-7 py-3.5 text-sm font-semibold text-noir transition-colors duration-300 hover:bg-ivory"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {hero.ctaPrimario.label}
          </a>
          <p className="text-sm text-stone">
            {site.endereco.logradouro} · {site.endereco.bairro}
          </p>
        </div>
      </div>
    </>
  );
}
