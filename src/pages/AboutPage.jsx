const AboutPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-950">
        About GMC Sessions
      </h1>
      <p className="max-w-3xl text-base leading-7 text-slate-600">
        This app now uses a layout-based routing structure so shared UI like the
        navbar and footer live in one place, while each page stays focused on
        its own content.
      </p>
      <p className="max-w-3xl text-base leading-7 text-slate-600">
        That makes the project easier to maintain, easier to scale, and much
        cleaner when you start adding forms, dashboards, or protected routes.
      </p>
    </section>
  );
};

export default AboutPage;
