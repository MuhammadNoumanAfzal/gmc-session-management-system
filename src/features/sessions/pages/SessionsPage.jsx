const sessionList = [
  {
    title: "React Fundamentals",
    time: "10:00 AM",
    trainer: "Ayesha Khan",
    status: "Scheduled",
  },
  {
    title: "UI Planning Workshop",
    time: "01:00 PM",
    trainer: "Usman Ali",
    status: "In Progress",
  },
  {
    title: "Project Review",
    time: "04:00 PM",
    trainer: "Fatima Noor",
    status: "Upcoming",
  },
];

const SessionsPage = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h1 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-white">
          Sessions
        </h1>
        <p className="max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
          A reusable sessions view with theme tokens and card patterns that can
          grow into filters, APIs, and protected dashboard flows.
        </p>
      </div>

      <div className="grid gap-4">
        {sessionList.map((session) => (
          <article
            key={`${session.title}-${session.time}`}
            className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {session.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Trainer: {session.trainer}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full border border-white/8 bg-white/6 px-4 py-2 font-medium text-white">
                  {session.time}
                </span>
                <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 font-medium text-[#d9c8ff]">
                  {session.status}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SessionsPage;
