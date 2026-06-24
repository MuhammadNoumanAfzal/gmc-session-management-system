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
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Sessions
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          A clean starter view for listing current session activity inside your
          GMC application.
        </p>
      </div>

      <div className="grid gap-4">
        {sessionList.map((session) => (
          <article
            key={`${session.title}-${session.time}`}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">
                  {session.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Trainer: {session.trainer}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700">
                  {session.time}
                </span>
                <span className="rounded-full bg-emerald-50 px-4 py-2 font-medium text-emerald-700">
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
