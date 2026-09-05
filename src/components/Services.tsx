import { servicos, servicosSecao, waLink } from "../data";
import { LineReveal, Reveal } from "./Reveal";
import { ArrowIcon } from "./Icons";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* cabeçalho editorial */}
        <div className="mb-16 grid gap-10 md:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone">
                <span className="h-px w-10 bg-blush" aria-hidden="true" />
                {servicosSecao.superlabel}
              </p>
            </Reveal>
            <h2
              id="servicos-titulo"
              className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.02em] text-noir"
            >
              <LineReveal lines={[servicosSecao.tituloLinha1]} delay={120} />
              <LineReveal lines={[<em key="l2" className="text-blush">{servicosSecao.tituloLinha2}</em>]} delay={260} />
            </h2>
          </div>
          <Reveal delay={260} className="lg:col-span-5">
            <p className="max-w-md leading-relaxed text-stone">{servicosSecao.apoio}</p>
            <p className="mt-6 font-display text-2xl italic text-noir/50">
              {String(servicos.length).padStart(2, "0")} protocolos autorais
            </p>
          </Reveal>
        </div>

        {/* ziguezague editorial */}
        <div className="space-y-20 md:space-y-28">
          {servicos.map((servico, i) => {
            const invertido = i % 2 === 1;
            return (
              <article
                key={servico.id}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal className={`lg:col-span-7 ${invertido ? "lg:order-2" : ""}`} delay={0}>
                  <figure className="group relative overflow-hidden rounded-[4px] shadow-[0_30px_60px_-30px_rgba(26,26,26,0.35)]">
                    <div className="aspect-[4/3] overflow-hidden lg:aspect-[16/11]">
                      <img
                        src={servico.imagem}
                        alt={servico.imagemAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045] will-change-transform"
                      />
                    </div>
                    {/* corner tag */}
                    <figcaption className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-noir/85 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory">
                      <span className="h-1.5 w-1.5 rounded-full bg-blush" aria-hidden="true" />
                      {servico.nome}
                    </figcaption>
                    {/* índice editorial */}
                    <span
                      className="absolute right-5 top-4 font-display text-5xl italic leading-none text-ivory/85 mix-blend-difference"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figure>
                </Reveal>

                <Reveal className={`lg:col-span-5 ${invertido ? "lg:order-1" : ""}`} delay={140}>
                  <p className="mb-4 font-display text-xl italic text-stone">
                    protocolo {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-tight tracking-[-0.02em] text-noir">
                    {servico.nome}
                  </h3>
                  <p className="mt-5 leading-relaxed text-stone">{servico.descricao}</p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Detalhes de ${servico.nome}`}>
                    {servico.chips.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full border border-noir/15 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-noir/70 transition-colors duration-300 hover:border-blush hover:text-noir"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(servico.mensagem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-8 inline-flex items-center gap-3 border-b border-noir/25 pb-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-noir transition-colors duration-300 hover:border-blush hover:text-blush"
                  >
                    Saiba mais
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
