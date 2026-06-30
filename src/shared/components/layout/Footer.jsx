const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-bg-elevated)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          GMC Sessions helps teams manage classes, schedules, and learning
          operations from one place.
        </p>
        <p>Structured with React Router, shared layout, and reusable tokens.</p>
      </div>
    </footer>
  );
};

export default Footer;
