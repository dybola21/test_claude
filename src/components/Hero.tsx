import { hero, site, waLink } from "../data";
import { LineReveal, Reveal } from "./Reveal";
import { Stars, WhatsAppIcon } from "./Icons";

export function Hero() {
  return (
    <section aria-label="Apresentação da Vênus Belle" className="relative flex min-h-[100svh] items-center overflow-hidden bg-noir">
      {/* imagem full-bleed com ken burns */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={hero.imagem}
          alt={hero.imagemAlt}
          className="kenburns h-full w-full object-cover"
        />
      </div>

      {/* degradê esquerda → direita */}
      <div className="absolute inset-0 bg-gradient-to-r from-noir/90 via-noir/60 via-45% to-transparent" aria-hidden="true" />
      {/* respiro para o header */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-noir/70 to-transparent" aria-hidden="true" />
      {/* véu inferior para a transição ivory */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ivory" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-40 pt-36 md:px-8 md:pb-44">
        <Reveal delay={0}>
          <p className="mb-7 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-blush">
            <span className="h-px w-10 bg-blush" aria-hidden="true" />
            {hero.superlabel}
          </p>
        </Reveal>

        <h1 className="max-w-3xl font-display text-[clamp(2.6rem,6.5vw,5.2rem)] font-medium leading-[1.03] tracking-[-0.02em] text-ivory">
          <LineReveal lines={[hero.tituloLinha1]} delay={100} />
          <LineReveal lines={[<em key="l2" className="text-blush">{hero.tituloLinha2}</em>]} delay={260} />
        </h1>

        <Reveal delay={420} className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-ivory/75 md:text-lg">{hero.subtitulo}</p>
        </Reveal>

        <Reveal delay={540} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={waLink(hero.ctaPrimario.mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-blush px-7 py-4 text-sm font-semibold tracking-wide text-noir transition-all duration-300 hover:bg-ivory hover:shadow-[0_16px_40px_-14px_rgba(201,169,154,0.8)]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" />
            {hero.ctaPrimario.label}
          </a>
          <a
            href={hero.ctaSecundario.href}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-4 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-blush hover:text-blush"
          >
            {hero.ctaSecundario.label}
          </a>
        </Reveal>

        {/* prova social */}
        <Reveal delay={680} className="mt-12 flex items-center gap-4">
          <span
            role="img"
            aria-label={`Nota ${site.notaFormatada} de 5 — ${site.totalAvaliacoes} avaliações no Google`}
          >
            <Stars value={site.nota} className="h-[17px] w-[17px]" />
          </span>
          <p className="text-sm text-ivory/75">
            <span className="font-display text-2xl leading-none text-ivory">{site.notaFormatada}</span>
            <span className="mx-1.5 text-ivory/40">·</span>
            {site.totalAvaliacoes} avaliações no Google
          </p>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-4 md:flex" aria-hidden="true">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-ivory/60 [writing-mode:vertical-rl]">
          {hero.scrollCue}
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-ivory/15">
          <span className="cue-line absolute inset-0 bg-blush" />
        </span>
      </div>
    </section>
  );
}
