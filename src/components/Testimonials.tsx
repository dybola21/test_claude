import type { CSSProperties } from "react";
import { depoimentos, depoimentosSecao, site, type Depoimento } from "../data";
import { LineReveal, Reveal } from "./Reveal";
import { Stars } from "./Icons";

function Card({ depoimento }: { depoimento: Depoimento }) {
  const iniciais = depoimento.nome
    .split(" ")
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="mr-6 flex w-[340px] shrink-0 flex-col rounded-[4px] border border-noir/8 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(26,26,26,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <span
          role="img"
          aria-label={`Nota ${depoimento.nota.toLocaleString("pt-BR")} de 5`}
        >
          <Stars
            value={depoimento.nota}
            className="h-3.5 w-3.5"
            baseClass="text-noir/15"
            fillClass="text-blush"
          />
        </span>
        <span className="rounded-full bg-blush/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-noir/70">
          {depoimento.servico}
        </span>
      </div>

      <p className="mt-6 flex-1 text-[15px] leading-relaxed text-noir/80">
        “{depoimento.texto}”
      </p>

      <footer className="mt-7 flex items-center gap-3.5 border-t border-noir/10 pt-5">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-noir font-display text-sm italic text-blush"
          aria-hidden="true"
        >
          {iniciais}
        </span>
        <div>
          <p className="text-sm font-semibold text-noir">{depoimento.nome}</p>
          <p className="text-xs text-stone">{depoimento.cidade} · Rio de Janeiro</p>
        </div>
      </footer>
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="overflow-hidden border-t border-noir/10 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
          {/* nota gigante */}
          <Reveal>
            <p className="font-display text-[clamp(4.5rem,11vw,9rem)] font-medium italic leading-[0.85] tracking-[-0.02em] text-noir">
              {site.notaFormatada}
              <span className="text-blush">★</span>
            </p>
          </Reveal>

          <div className="min-w-[260px] flex-1 pb-2">
            <Reveal delay={120}>
              <p className="mb-5 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone">
                <span className="h-px w-10 bg-blush" aria-hidden="true" />
                {depoimentosSecao.superlabel}
              </p>
            </Reveal>
            <h2
              id="depoimentos-titulo"
              className="font-display text-[clamp(2.2rem,4.8vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-noir"
            >
              <LineReveal lines={[depoimentosSecao.tituloLinha1]} delay={140} />
              <LineReveal lines={[<em key="l2" className="text-blush">{depoimentosSecao.tituloLinha2}</em>]} delay={280} />
            </h2>
            <Reveal delay={320}>
              <p className="mt-5 max-w-md leading-relaxed text-stone">
                {depoimentosSecao.apoio} {site.totalAvaliacoes} avaliações, nota média{" "}
                {site.notaFormatada} no Google.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* marquee infinito de cards */}
      <Reveal delay={200}>
        <div className="marquee mask-fade-x mt-14 overflow-hidden md:mt-20" aria-label="Depoimentos de clientes">
          <div className="marquee-track" style={{ "--marquee-duration": "52s" } as CSSProperties}>
            {[0, 1].map((copy) => (
              <div key={copy} className="flex" aria-hidden={copy === 1}>
                {depoimentos.map((depoimento) => (
                  <Card key={`${copy}-${depoimento.nome}`} depoimento={depoimento} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
