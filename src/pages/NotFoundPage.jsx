import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">
        404
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-slate-950">
        Page not found
      </h1>
      <p className="max-w-md text-slate-600">
        The page you are looking for does not exist yet. Head back to the home
        page and keep building from there.
      </p>
      <Link
        to="/"
        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
      >
        Go home
      </Link>
    </section>
  );
};

export default NotFoundPage;
