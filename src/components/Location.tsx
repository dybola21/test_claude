import { hero, localizacaoSecao, site, waLink } from "../data";
import { LineReveal, Reveal } from "./Reveal";
import { AccessibilityIcon, ClockIcon, ExternalIcon, PinIcon, WhatsAppIcon } from "./Icons";

export function Location() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="border-t border-noir/10 bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* texto */}
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-stone">
              <span className="h-px w-10 bg-blush" aria-hidden="true" />
              {localizacaoSecao.superlabel}
            </p>
          </Reveal>

          <h2
            id="contato-titulo"
            className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.02em] text-noir"
          >
            <LineReveal lines={[localizacaoSecao.tituloLinha1]} delay={120} />
            <LineReveal lines={[<em key="l2" className="text-blush">{localizacaoSecao.tituloLinha2}</em>]} delay={260} />
          </h2>

          <Reveal delay={220} className="mt-7">
            <p className="max-w-md leading-relaxed text-noir/75">{localizacaoSecao.descricao}</p>
          </Reveal>

          {/* endereço */}
          <Reveal delay={280} className="mt-10">
            <address className="flex items-start gap-4 not-italic">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-noir/15 text-blush">
                <PinIcon />
              </span>
              <p className="leading-relaxed text-noir/80">
                <span className="font-semibold text-noir">{site.endereco.logradouro}</span>
                <br />
                {site.endereco.bairro} · {site.endereco.cidade}
                <br />
                <span className="text-sm text-stone">{site.endereco.cep}</span>
              </p>
            </address>
          </Reveal>

          {/* horários */}
          <Reveal delay={340} className="mt-10">
            <div className="flex items-center gap-3 text-noir">
              <ClockIcon className="h-5 w-5 text-blush" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Horários</h3>
            </div>
            <ul className="mt-5 border-t border-noir/10">
              {site.horarios.map((horario) => (
                <li
                  key={horario.dias}
                  className="flex items-center justify-between gap-4 border-b border-noir/10 py-3.5 text-sm"
                >
                  <span className="text-noir/70">{horario.dias}</span>
                  <span className="flex items-center gap-3">
                    {horario.destaque && (
                      <span className="rounded-full bg-blush/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-noir">
                        horário estendido
                      </span>
                    )}
                    <span className={horario.destaque ? "font-semibold text-noir" : "text-stone"}>
                      {horario.horas}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* acessibilidade */}
          <Reveal delay={400} className="mt-8">
            <p className="flex items-start gap-3.5 text-sm leading-relaxed text-stone">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-noir/15 text-blush">
                <AccessibilityIcon className="h-[18px] w-[18px]" />
              </span>
              {localizacaoSecao.acessibilidade}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={460} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={waLink(hero.ctaPrimario.mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-blush px-7 py-4 text-sm font-semibold tracking-wide text-noir transition-all duration-300 hover:bg-noir hover:text-ivory hover:shadow-[0_16px_40px_-14px_rgba(26,26,26,0.5)]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" />
              {localizacaoSecao.ctaWhatsapp}
            </a>
            <a
              href={site.endereco.mapaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-noir/25 px-7 py-4 text-sm font-medium tracking-wide text-noir transition-all duration-300 hover:border-blush hover:text-blush"
            >
              {localizacaoSecao.ctaMapa}
              <ExternalIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* mapa */}
        <Reveal delay={200} className="min-h-[420px] lg:min-h-0">
          <div className="group relative h-full min-h-[420px] overflow-hidden rounded-[4px] border border-noir/10 shadow-[0_30px_60px_-30px_rgba(26,26,26,0.35)]">
            <iframe
              src={localizacaoSecao.mapaSrc}
              title="Mapa — localização da Vênus Belle em Botafogo, Rio de Janeiro"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.85] transition-[filter] duration-700 group-hover:grayscale-0"
            />
            <p className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-noir/85 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blush" aria-hidden="true" />
              {site.endereco.bairro} · Zona Sul
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
