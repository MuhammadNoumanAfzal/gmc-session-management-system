import Swal from "sweetalert2";
import {
  floatingInsightCards,
  heroBenefits,
} from "../data/landingContent";

const heroIllustration = "/photo.png";

const cardPositionClasses = {
  "top-left": "left-0 top-8 lg:-left-8",
  "top-right": "right-0 top-7 lg:-right-8",
  "bottom-left": "bottom-18 left-2 lg:-left-10",
  "bottom-right": "bottom-7 right-0 lg:-right-6",
};

const HeroSection = () => {
  const handleConsultation = () => {
    Swal.fire({
      title: "Book Your Scholarship Consultation",
      text: "Connect your booking form, Calendly link, or WhatsApp flow here so students can schedule their consultation instantly.",
      icon: "info",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7B48E3",
      background: "#140A1D",
      color: "#F5F7FB",
    });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-[2rem] bg-[#12091b] px-4 py-6 sm:px-5 lg:px-8 lg:py-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[58%] top-[14%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,72,227,0.18)_0%,rgba(123,72,227,0)_70%)] blur-3xl" />
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,rgba(123,72,227,0.1),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(123,72,227,0.06),transparent_18%),radial-gradient(circle_at_55%_80%,rgba(123,72,227,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center">
        <div className="space-y-6">
          <span
            className="hero-reveal inline-flex w-fit rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            style={{ animationDelay: "0.05s" }}
          >
            Trusted by Future International Students
          </span>

          <div className="space-y-5">
            <h1 className="max-w-4xl font-[var(--font-display)] text-[3.25rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:text-[4.1rem] lg:text-[3.7rem] xl:text-[4.15rem]">
              <span
                className="hero-reveal block"
                style={{ animationDelay: "0.18s" }}
              >
                Learn From Students Who Actually Won
              </span>
              <span
                className="hero-reveal mt-2 block bg-[linear-gradient(135deg,#7B48E3_0%,#8F5CFF_100%)] bg-clip-text text-transparent"
                style={{ animationDelay: "0.28s" }}
              >
                Fully Funded Scholarships
              </span>
            </h1>

            <p
              className="hero-reveal max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-[1.12rem]"
              style={{ animationDelay: "0.48s" }}
            >
              Get personalized guidance from scholarship recipients who have
              secured admissions to top universities worldwide. Learn proven
              strategies, avoid costly mistakes, and receive complete admission
              and visa support from Global Minds Consultants.
            </p>
          </div>

          <div className="grid max-w-3xl gap-3 sm:grid-cols-2">
            {heroBenefits.map((benefit, index) => (
              <article
                key={benefit}
                className="hero-chip hero-reveal flex items-center gap-3 rounded-[1.2rem] border border-[var(--color-border)] bg-[rgba(33,18,51,0.52)] px-4 py-3 text-sm text-white backdrop-blur-md"
                style={{ animationDelay: `${0.58 + index * 0.06}s` }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(123,72,227,0.16)] text-white transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.5 12.5 9.5 16.5 18.5 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{benefit}</span>
              </article>
            ))}
          </div>

          <div
            className="hero-reveal flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.98s" }}
          >
            <button
              type="button"
              onClick={handleConsultation}
              className="rounded-full bg-[linear-gradient(135deg,#7B48E3_0%,#8F5CFF_100%)] px-7 py-4 text-base font-semibold text-white shadow-[0_0_35px_rgba(123,72,227,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(123,72,227,0.46)]"
            >
              Book Your Scholarship Consultation
            </button>
            <a
              href="#mentors"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.04)] px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[var(--color-accent-soft)]"
            >
              Explore Our Mentors
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10h12m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="hero-reveal" style={{ animationDelay: "1.08s" }}>
            <div className="flex items-center gap-3 text-white">
              <span className="text-[1.05rem] tracking-[0.16em] text-[#f7d87d]">
                *****
              </span>
              <p className="text-sm text-[var(--color-text-muted)]">
                Trusted by 500+ students
              </p>
            </div>
          </div>
        </div>

        <div
          id="mentors"
          className="hero-reveal relative min-h-[29rem] py-2 lg:min-h-[33rem] lg:py-3"
          style={{ animationDelay: "0.34s" }}
        >
          <div className="absolute inset-x-10 top-5 h-28 rounded-full bg-[radial-gradient(circle,rgba(123,72,227,0.18)_0%,rgba(123,72,227,0)_70%)] blur-3xl" />

          <div className="absolute inset-x-8 top-7 rounded-[1.8rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(20,10,29,0.82)_0%,rgba(33,18,51,0.72)_100%)] p-4 shadow-[0_28px_70px_rgba(123,72,227,0.18)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(160deg,rgba(20,10,29,0.55)_0%,rgba(33,18,51,0.3)_100%)]">
              <div className="relative flex min-h-[22rem] items-end justify-center bg-[radial-gradient(circle_at_top,rgba(123,72,227,0.14),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(20,10,29,0.2)_100%)] px-6 pt-8">
                <img
                  src={heroIllustration}
                  alt="Scholarship mentorship visual"
                  className="hero-image w-full max-w-sm object-contain opacity-90"
                />

                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(5,7,9,0)_0%,rgba(5,7,9,0.66)_100%)] p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#d8c9ff]">
                    Mentor Spotlight
                  </p>
                  <p className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-white">
                    Real scholarship journeys, guided with clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {floatingInsightCards.map((card, index) => (
            <article
              key={card.title}
              className={`hero-float absolute z-10 w-[13rem] rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(33,18,51,0.82)] p-4 shadow-[0_18px_40px_rgba(5,7,9,0.36)] backdrop-blur-xl ${cardPositionClasses[card.position]}`}
              style={{ animationDelay: `${0.4 + index * 0.18}s` }}
            >
              <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                {card.badge}
              </span>
              <h2 className="mt-3 text-sm font-semibold text-white">
                {card.title}
              </h2>
              <p className="mt-2 text-xs leading-6 text-[var(--color-text-muted)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
