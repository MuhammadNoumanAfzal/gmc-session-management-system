import { NavLink } from "react-router-dom";
import { navigationItems } from "../../data/navigation";
import { ROUTES } from "../../constants/routes";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#12091b] backdrop-blur-[18px]">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,#7b48e3_0%,#8f5cff_100%)] text-sm font-bold text-white shadow-[var(--shadow-glow)]">
            GM
          </span>
          <div>
            <p className="font-[var(--font-display)] text-base font-semibold tracking-tight text-white lg:text-lg">
              Global Minds
            </p>
            <p className="text-xs text-[var(--color-text-muted)] lg:text-sm">
              Scholarship Consultancy
            </p>
          </div>
        </NavLink>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 rounded-full border border-white/6 bg-white/[0.03] px-6 py-3 xl:flex">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <NavLink
            to={ROUTES.sessions}
            className="rounded-full bg-[linear-gradient(135deg,#7B48E3_0%,#8F5CFF_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(123,72,227,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(123,72,227,0.42)] lg:px-6"
          >
            Book Consultation
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
