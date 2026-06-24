import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active sessions", value: "12+" },
  { label: "Trainers", value: "08" },
  { label: "Learners", value: "150+" },
];

const HomePage = () => {
  const handleWelcomeAlert = () => {
    Swal.fire({
      title: "Welcome to GMC Sessions",
      text: "Your initial routing setup is ready and SweetAlert2 is working.",
      icon: "success",
      confirmButtonText: "Nice",
      confirmButtonColor: "#0f172a",
    });
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          Smart session management for GMC
        </span>
        <div className="space-y-4">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Organize your training sessions with a clean React foundation.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            This starter includes a root layout, reusable navigation, clear page
            structure, and initial routing so the app stays easy to grow.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/sessions"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View sessions
          </Link>
          <button
            type="button"
            onClick={handleWelcomeAlert}
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5"
          >
            Test alert
          </button>
        </div>
      </div>

      <div className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-200/70">
        <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
            Dashboard snapshot
          </p>
          <p className="mt-3 text-3xl font-semibold">June training cycle</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Keep schedules, instructors, and announcements aligned from one
            simple interface.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
