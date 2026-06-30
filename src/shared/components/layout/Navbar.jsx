import { NavLink } from "react-router-dom";
import { navigationItems } from "../../data/navigation";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(5,7,9,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,#7b48e3_0%,#8f5cff_100%)] text-sm font-bold text-white shadow-[var(--shadow-glow)]">
            GS
          </span>
          <div>
            <p className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-white">
              GMC Sessions
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Session Management Suite
            </p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 p-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[linear-gradient(135deg,#7b48e3_0%,#8f5cff_100%)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-white/8 hover:text-white",
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
