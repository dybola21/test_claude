import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Observa quando o elemento entra na viewport (uma única vez). */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  /** atraso em ms */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/** Entrada suave: opacity 0→1 + translateY 26px→0. */
export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(26px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "950ms",
        transitionTimingFunction: EASE,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type LineRevealProps = {
  /** cada item vira uma linha com máscara de overflow */
  lines: ReactNode[];
  /** atraso da primeira linha */
  delay?: number;
  /** incremento entre linhas */
  stagger?: number;
  className?: string;
  lineClassName?: string;
};

/** Line reveal para títulos: overflow hidden + translateY(115%)→0. */
export function LineReveal({
  lines,
  delay = 0,
  stagger = 140,
  className,
  lineClassName,
}: LineRevealProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${lineClassName ?? ""}`}
        >
          <span
            className="block will-change-transform"
            style={{
              transform: inView ? "translateY(0)" : "translateY(115%)",
              transitionProperty: "transform",
              transitionDuration: "1100ms",
              transitionTimingFunction: EASE,
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
