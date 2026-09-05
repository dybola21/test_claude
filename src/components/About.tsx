import { useEffect, useState } from "react";
import { sobreSecao, type Metrica } from "../data";
import { LineReveal, Reveal, useInView } from "./Reveal";

/** Conta até o valor alvo quando `ativo` for true; respeita prefers-reduced-motion. */
function useCountUp(alvo: number, ativo: boolean, decimais = 0, duracao = 1800) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!ativo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValor(alvo);
      return;
    }
    let raf = 0;
    const inicio = performance.now();
    const tick = (agora: number) => {
      const progresso = Math.min(1, (agora - inicio) / duracao);
      const eased = 1 - Math.pow(1 - progresso, 3);
      setValor(alvo * eased);
      if (progresso < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ativo, alvo, duracao]);

  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: decimais,
    maximumFractionDigits: decimais,
  });
}

function MetricaItem({ metrica, ativo, delay }: { metrica: Metrica; ativo: boolean; delay: number }) {
  const numero = useCountUp(metrica.valor ?? 0, ativo, metrica.decimais ?? 0);
  const ehNumero = metrica.valor !== undefined;

  return (
    <Reveal delay={delay} className="border-t border-noir/15 pt-6">
      <p className="font-display text-[clamp(2.6rem,5vw,4rem)] font-medium leading-none tracking-[-0.02em] text-noir">
        {ehNumero ? (
          <>
            {numero}
            {metrica.sufixo && <span className="text-blush">{metrica.sufixo}</span>}
          </>
        ) : (
          <em className="text-blush">{metrica.texto}</em>
        )}
      </p>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone">
        {metrica.label}
      </p>
    </Reveal>
  );
}

export function About() {
  const { ref: metricasRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-cream">
      <div className="grid lg:grid-cols-12">
        {/* imagem sangrando até a borda esquerda */}
        <div className="relative min-h-[420px] overflow-hidden lg:col-span-5 lg:min-h-[720px]">
          <img
            src={sobreSecao.imagem}
            alt={sobreSecao.imagemAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/45 via-transparent to-transparent" aria-hidden="true" />
          <p className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-full bg-noir/85 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory">
            <span className="h-1.5 w-1.5 rounded-full bg-blush" aria-hidden="true" />
            {sobreSecao.seloImagem}
          </p>
        </div>

        {/* texto */}
        <div className="px-5 py-20 md:px-8 lg:col-span-7 lg:py-32 lg:pl-20 xl:pl-28">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone">
                <span className="h-px w-10 bg-blush" aria-hidden="true" />
                {sobreSecao.superlabel}
              </p>
            </Reveal>

            <h2
              id="sobre-titulo"
              className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.02em] text-noir"
            >
              <LineReveal lines={[sobreSecao.tituloLinha1]} delay={120} />
              <LineReveal lines={[<em key="l2" className="text-blush">{sobreSecao.tituloLinha2}</em>]} delay={260} />
            </h2>

            {sobreSecao.paragrafos.map((paragrafo, i) => (
              <Reveal key={i} delay={200 + i * 120} className="mt-7">
                <p className="leading-relaxed text-noir/75">{paragrafo}</p>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <blockquote className="mt-10 border-l-2 border-blush pl-6">
                <p className="font-display text-2xl italic leading-snug text-noir md:text-[1.7rem]">
                  “{sobreSecao.quote.texto}”
                </p>
                <footer className="mt-4 text-sm text-stone">
                  <span className="font-semibold text-noir">{sobreSecao.quote.autor}</span>
                  <span className="mx-2 text-blush">—</span>
                  {sobreSecao.quote.cargo}
                </footer>
              </blockquote>
            </Reveal>

            {/* métricas com count-up */}
            <div ref={metricasRef} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
              {sobreSecao.metricas.map((metrica, i) => (
                <MetricaItem key={metrica.label} metrica={metrica} ativo={inView} delay={i * 120} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
