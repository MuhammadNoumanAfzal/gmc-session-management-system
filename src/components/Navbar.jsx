import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Sessions", to: "/sessions" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/15">
            GMC
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">
              GMC Sessions
            </p>
            <p className="text-sm text-slate-500">Learning portal</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 p-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-white hover:text-slate-950",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
