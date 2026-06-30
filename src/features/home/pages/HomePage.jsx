import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";

const stats = [
  { label: "Years of experience", value: "4" },
  { label: "Projects completed", value: "40+" },
  { label: "Happy clients", value: "100+" },
  { label: "Team members", value: "10+" },
];

const HomePage = () => {
  const handleWelcomeAlert = () => {
    Swal.fire({
      title: "Welcome to GMC Sessions",
      text: "Your production-ready routing structure and theme system are now wired in.",
      icon: "success",
      confirmButtonText: "Continue",
      confirmButtonColor: "#8b5cf6",
      background: "#14091f",
      color: "#f5f7fb",
    });
  };

  return (
    <section className="space-y-8">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(29,15,45,0.96)_0%,rgba(10,15,23,0.96)_100%)] p-8 shadow-[var(--shadow-glow)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-medium text-[#d9c8ff]">
            Standardized theme tokens and modular routing
          </span>

          <div className="space-y-4">
            <h1 className="max-w-3xl font-[var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build and manage every session from a production-ready React app.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
              The app now uses shared routes, layout-based navigation, and a
              branded dark interface inspired by your reference colors so it is
              easier to scale and maintain.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to={ROUTES.sessions}
              className="rounded-full bg-[linear-gradient(135deg,#6d28d9_0%,#8b5cf6_100%)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View sessions
            </Link>
            <button
              type="button"
              onClick={handleWelcomeAlert}
              className="rounded-full border border-[var(--color-border-strong)] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Preview setup
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6">
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[linear-gradient(160deg,rgba(93,36,171,0.35)_0%,rgba(18,11,29,0.92)_60%)] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d9c8ff]">
              Platform snapshot
            </p>
            <p className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-white">
              Session command center
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
              Keep schedules, trainers, announcements, and performance data
              aligned inside a single structured application shell.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <p className="font-[var(--font-display)] text-5xl font-semibold text-white">
              {stat.value}
            </p>
            <p className="mt-3 max-w-[10rem] text-base leading-6 text-[var(--color-text-muted)]">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
