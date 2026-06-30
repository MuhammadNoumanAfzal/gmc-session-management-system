import {
  credibilityHighlights,
  credibilityMetrics,
} from "../data/landingContent";

const CredibilityStrip = () => {
  return (
    <section
      id="how-it-works"
      className="space-y-5 rounded-[1.75rem] border border-[var(--color-border)] bg-[rgba(20,10,29,0.88)] p-5 xl:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {credibilityMetrics.map((metric, index) => (
          <article
            key={metric.label}
            className="hero-reveal rounded-[1.35rem] border border-white/6 bg-[rgba(255,255,255,0.03)] p-5"
            style={{ animationDelay: `${0.15 + index * 0.08}s` }}
          >
            <p className="font-[var(--font-display)] text-3xl font-semibold text-white">
              {metric.value}
            </p>
            <p className="mt-2 text-sm tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
              {metric.label}
            </p>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {credibilityHighlights.map((item, index) => (
          <span
            key={item}
            className="hero-reveal rounded-full border border-white/6 bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-[var(--color-text-muted)]"
            style={{ animationDelay: `${0.45 + index * 0.06}s` }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CredibilityStrip;
