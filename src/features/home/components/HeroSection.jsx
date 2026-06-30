import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiCheck,
  HiGlobeAlt,
  HiMiniAcademicCap,
  HiMiniCheckBadge,
  HiMiniDocumentText,
  HiMiniSparkles,
  HiMiniUserGroup,
} from "react-icons/hi2";
import Swal from "sweetalert2";
import {
  floatingInsightCards,
  heroBenefits,
} from "../data/landingContent";

const heroIllustration = "/photo.png";

const cardPositionClasses = {
  "top-left": "left-[-0.4rem] top-0 lg:-left-10",
  "bottom-right": "bottom-4 right-[-0.2rem] lg:-right-8",
};

const cardVariantClasses = {
  mentor:
    "w-[13.5rem] min-h-[15rem] rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(38,22,58,0.92)_0%,rgba(27,16,42,0.92)_100%)]",
  funding:
    "w-[13.75rem] min-h-[15rem] rounded-[1.45rem] bg-[linear-gradient(180deg,rgba(53,28,84,0.94)_0%,rgba(32,18,48,0.92)_100%)]",
};

const badgeVariantClasses = {
  mentor:
    "border-white/10 bg-[rgba(123,72,227,0.14)] text-[#dcccff]",
  funding:
    "border-[var(--color-border-strong)] bg-[rgba(143,92,255,0.18)] text-white",
};

const titleVariantClasses = {
  mentor: "text-[1.03rem]",
  funding: "text-[1.22rem]",
};

const bodyVariantClasses = {
  mentor: "max-w-[10.75rem]",
  funding: "max-w-[11rem]",
};

const backTitleVariantClasses = {
  mentor: "text-[0.98rem]",
  funding: "text-[1.02rem]",
};

const iconContainerClasses = {
  mentor:
    "border-white/10 bg-[rgba(255,255,255,0.04)] text-[#dcccff]",
  funding:
    "border-[var(--color-border-strong)] bg-[rgba(123,72,227,0.18)] text-white",
};

const benefitIcons = {
  consultation: HiMiniUserGroup,
  shortlisting: HiMiniAcademicCap,
  review: HiMiniDocumentText,
  visa: HiMiniCheckBadge,
};

const renderCardIcon = (icon) => {
  if (icon === "globe") {
    return <HiGlobeAlt className="h-4 w-4" aria-hidden="true" />;
  }

  return <HiMiniSparkles className="h-4 w-4" aria-hidden="true" />;
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
      className="relative overflow-hidden rounded-[2rem] bg-[#0F0715] px-4 py-6 sm:px-5 lg:px-8 lg:py-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[58%] top-[14%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(195,139,255,0.24)_0%,rgba(195,139,255,0)_70%)] blur-3xl" />
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_20%,rgba(195,139,255,0.12),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(157,92,255,0.08),transparent_18%),radial-gradient(circle_at_55%_80%,rgba(157,92,255,0.09),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-center">
        <div className="space-y-6">
          <span
            className="hero-reveal inline-flex w-fit rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            style={{ animationDelay: "0.05s" }}
          >
            Paid scholarship consultation with real winner guidance
          </span>

          <div className="space-y-5">
            <h1 className="max-w-3xl font-[var(--font-display)] text-[2.45rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[2.8rem] xl:text-[3.1rem]">
              <span
                className="hero-reveal block"
                style={{ animationDelay: "0.18s" }}
              >
                Book a Session With Scholarship Winners
              </span>
              <span
                className="hero-reveal mt-2 block bg-[linear-gradient(135deg,#43B86A_0%,#7BE495_100%)] bg-clip-text text-transparent"
                style={{ animationDelay: "0.28s" }}
              >
                Fully Funded Scholarships
              </span>
            </h1>

            <p
              className="hero-reveal max-w-xl text-[0.92rem] leading-7 text-[var(--color-text-muted)] sm:text-[0.98rem]"
              style={{ animationDelay: "0.48s" }}
            >
              Get direct guidance from real scholarship winners and admission
              advisors. Leave with clearer university options, stronger
              applications, and a better study abroad plan.
            </p>
          </div>

          <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
            {heroBenefits.map((benefit, index) => {
              const BenefitIcon = benefitIcons[benefit.icon] ?? HiMiniCheckBadge;

              return (
              <article
                key={benefit.label}
                className="hero-chip hero-reveal group flex items-center gap-3 rounded-[1.2rem] border border-[var(--color-border)] bg-[rgba(44,24,66,0.58)] px-4 py-2.5 text-[0.92rem] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(123,72,227,0.44)]"
                style={{ animationDelay: `${0.58 + index * 0.06}s` }}
              >
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(123,72,227,0.28)] bg-[rgba(157,92,255,0.18)] text-white transition-all duration-300 group-hover:border-[rgba(67,184,106,0.48)] group-hover:bg-[rgba(67,184,106,0.18)]">
                  <motion.span
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-center justify-center"
                  >
                    <BenefitIcon className="h-4.5 w-4.5" aria-hidden="true" />
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0.5 }}
                    whileHover={{ scale: 1.15, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-[rgba(67,184,106,0.42)]"
                  />
                </span>
                <span>{benefit.label}</span>
              </article>
              );
            })}
          </div>

          <div
            className="hero-reveal flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.98s" }}
          >
            <button
              type="button"
              onClick={handleConsultation}
              className="group inline-flex rounded-full bg-[linear-gradient(135deg,#1F7A3D_0%,#43B86A_100%)] px-6 py-3.5 text-[0.96rem] font-semibold text-white shadow-[0_0_35px_rgba(67,184,106,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(67,184,106,0.46)]"
            >
              <span className="inline-flex items-center gap-2.5">
                <HiCheck className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
                Book Your Consultation Session
              </span>
            </button>
            <a
              href="#mentors"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.04)] px-6 py-3.5 text-[0.96rem] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[rgba(195,139,255,0.16)]"
            >
              Explore Our Mentors
              <HiArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
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
          className="hero-reveal relative min-h-[27rem] py-0 lg:min-h-[31rem] lg:py-1"
          style={{ animationDelay: "0.34s" }}
        >
          <div className="absolute inset-x-10 top-1 h-28 rounded-full bg-[radial-gradient(circle,rgba(195,139,255,0.24)_0%,rgba(195,139,255,0)_70%)] blur-3xl" />

          <div className="absolute inset-x-8 top-3 rounded-[1.8rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(36,18,54,0.86)_0%,rgba(27,13,39,0.78)_100%)] p-4 shadow-[0_28px_70px_rgba(195,139,255,0.18)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(160deg,rgba(44,24,66,0.48)_0%,rgba(27,13,39,0.3)_100%)]">
              <div className="relative flex min-h-[22rem] items-end justify-center bg-[radial-gradient(circle_at_top,rgba(195,139,255,0.18),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(27,13,39,0.2)_100%)] px-6 pt-8">
                <img
                  src={heroIllustration}
                  alt="Scholarship consultation mentor"
                  className="hero-image w-full max-w-sm object-contain opacity-90"
                />

                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(5,7,9,0)_0%,rgba(5,7,9,0.66)_100%)] p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#d8c9ff]">
                    Consultation Spotlight
                  </p>
                  <p className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-white">
                    A paid session that gives clarity, direction, and a real action plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {floatingInsightCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 22px 44px rgba(195, 139, 255, 0.18)",
              }}
              style={{ animationDelay: `${0.4 + index * 0.18}s` }}
              className={`absolute z-10 cursor-pointer overflow-hidden will-change-transform [perspective:1200px] ${cardPositionClasses[card.position]} ${cardVariantClasses[card.variant]}`}
            >
              <motion.div
                initial={false}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full min-h-[15rem] w-full rounded-[inherit] [transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 overflow-hidden rounded-[inherit] border border-[var(--color-border)] p-3.5 backdrop-blur-xl [backface-visibility:hidden]">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${badgeVariantClasses[card.variant]}`}
                    >
                      {card.badge}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border ${iconContainerClasses[card.variant]}`}
                    >
                      {renderCardIcon(card.icon)}
                    </span>
                  </div>
                  <h2
                    className={`mt-3 font-semibold leading-6 text-white ${titleVariantClasses[card.variant]}`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`mt-2 text-[0.8rem] leading-6 text-[var(--color-text-muted)] ${bodyVariantClasses[card.variant]}`}
                  >
                    {card.body}
                  </p>
                </div>

                <div className="absolute inset-0 overflow-hidden rounded-[inherit] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(53,28,84,0.98)_0%,rgba(27,13,39,0.96)_100%)] p-3.5 backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-[rgba(195,139,255,0.14)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                      Inside
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[rgba(195,139,255,0.16)] text-white">
                      {renderCardIcon(card.icon)}
                    </span>
                  </div>
                  <h3
                    className={`mt-3 font-semibold leading-6 text-white ${backTitleVariantClasses[card.variant]}`}
                  >
                    What you get
                  </h3>
                  <div className="mt-3 space-y-2.5">
                    {card.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-2.5 text-[0.78rem] leading-5 text-[var(--color-text-muted)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
