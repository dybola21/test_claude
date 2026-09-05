import { footerSecao, nav, servicos, site, waLink } from "../data";
import { LineReveal, Reveal } from "./Reveal";
import { Stars, WhatsAppIcon } from "./Icons";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-noir text-ivory">
      {/* chamada editorial */}
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-blush">
                <span className="h-px w-10 bg-blush" aria-hidden="true" />
                {footerSecao.superlabel}
              </p>
            </Reveal>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.03] tracking-[-0.02em]">
              <LineReveal lines={[footerSecao.chamadaLinha1]} delay={120} />
              <LineReveal lines={[<em key="l2" className="text-blush">{footerSecao.chamadaLinha2}</em>]} delay={260} />
            </h2>
          </div>

          <Reveal delay={300} className="lg:col-span-4">
            <a
              href={waLink(footerSecao.mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blush px-8 py-5 text-sm font-semibold uppercase tracking-[0.14em] text-noir transition-all duration-300 hover:bg-ivory hover:shadow-[0_18px_50px_-16px_rgba(201,169,154,0.8)] sm:w-max"
            >
              <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
              {footerSecao.ctaLabel}
            </a>
            <p className="mt-5 text-sm text-stone">
              {site.whatsappFormatado} · resposta em poucos minutos
            </p>
          </Reveal>
        </div>
      </div>

      {/* colunas */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          {/* marca */}
          <div>
            <a href="#topo" className="font-display text-3xl tracking-[-0.02em]">
              Vênus <em className="text-blush">Belle</em>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
              {footerSecao.descricaoMarca}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span
                role="img"
                aria-label={`Nota ${site.notaFormatada} de 5 — ${site.totalAvaliacoes} avaliações no Google`}
              >
                <Stars value={site.nota} className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs text-ivory/60">
                {site.notaFormatada} · {site.totalAvaliacoes} avaliações
              </span>
            </div>
          </div>

          {/* navegação */}
          <nav aria-label="Rodapé — navegação">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blush">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link text-sm text-ivory/70 transition-colors duration-300 hover:text-blush">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* serviços */}
          <nav aria-label="Rodapé — serviços">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blush">Serviços</h3>
            <ul className="mt-5 space-y-3">
              {servicos.map((servico) => (
                <li key={servico.id}>
                  <a href="#servicos" className="nav-link text-sm text-ivory/70 transition-colors duration-300 hover:text-blush">
                    {servico.nome}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* horários e contato */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blush">
              Horários & contato
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory/70">
              {site.horarios.map((horario) => (
                <li key={horario.dias} className="flex justify-between gap-4">
                  <span>{horario.dias}</span>
                  <span className={horario.destaque ? "font-semibold text-blush" : ""}>{horario.horas}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(footerSecao.mensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-blush transition-colors duration-300 hover:text-ivory"
            >
              {site.whatsappFormatado}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              {site.endereco.logradouro}
              <br />
              {site.endereco.bairro} · {site.endereco.cidade}
            </p>
          </div>
        </div>
      </div>

      {/* barra inferior */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-7 text-xs text-stone md:flex-row md:items-center md:px-8">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados. · {footerSecao.creditos}
          </p>
          <p>
            {site.endereco.logradouro} — {site.endereco.bairro}, {site.endereco.cidade}
          </p>
        </div>
      </div>
    </footer>
  );
}
