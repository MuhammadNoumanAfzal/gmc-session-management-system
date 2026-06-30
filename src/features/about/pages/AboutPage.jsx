const AboutPage = () => {
  return (
    <section className="space-y-4 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8">
      <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-white">
        About GMC Sessions
      </h1>
      <p className="max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
        This app now uses a layout-based routing structure, centralized route
        config, and shared design tokens so the navbar, footer, and page styles
        live in predictable places.
      </p>
      <p className="max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
        That makes the project easier to maintain, easier to scale, and much
        cleaner when you begin adding forms, dashboards, role-based access, or
        API integration.
      </p>
    </section>
  );
};

export default AboutPage;
