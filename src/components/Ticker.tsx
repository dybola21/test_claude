import type { CSSProperties } from "react";
import { tickerItems } from "../data";
import { DiamondIcon } from "./Icons";

type TickerRowProps = {
  items: string[];
  reverse?: boolean;
  duration?: number;
  tone?: "ivory" | "stone";
  borderTop?: boolean;
};

function TickerRow({ items, reverse = false, duration = 40, tone = "ivory", borderTop = false }: TickerRowProps) {
  const toneClass = tone === "ivory" ? "text-ivory/70" : "text-stone";
  const doubled = [...items, ...items];

  return (
    <div
      className={`marquee overflow-hidden py-4 ${borderTop ? "border-t border-ivory/10" : ""}`}
    >
      <div
        className={`marquee-track items-center ${reverse ? "is-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {doubled.map((item, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 md:gap-12 md:pr-12">
                <span
                  className={`whitespace-nowrap text-[13px] uppercase tracking-[0.28em] ${toneClass}`}
                >
                  {item}
                </span>
                <DiamondIcon className="h-1.5 w-1.5 shrink-0 text-blush/80" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <section aria-label="Informações da clínica" className="bg-noir">
      <TickerRow items={tickerItems} duration={46} tone="ivory" />
      <TickerRow items={tickerItems} reverse duration={38} tone="stone" borderTop />
    </section>
  );
}
