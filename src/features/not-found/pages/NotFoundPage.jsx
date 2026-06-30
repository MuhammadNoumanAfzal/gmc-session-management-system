import { Link } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <span className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-medium text-[#d9c8ff]">
        404
      </span>
      <h1 className="font-[var(--font-display)] text-4xl font-bold tracking-tight text-white">
        Page not found
      </h1>
      <p className="max-w-md text-[var(--color-text-muted)]">
        The page you are looking for does not exist yet. Head back to the home
        page and keep building from there.
      </p>
      <Link
        to={ROUTES.home}
        className="rounded-full bg-[linear-gradient(135deg,#6d28d9_0%,#8b5cf6_100%)] px-6 py-3 text-sm font-semibold text-white"
      >
        Go home
      </Link>
    </section>
  );
};

export default NotFoundPage;
