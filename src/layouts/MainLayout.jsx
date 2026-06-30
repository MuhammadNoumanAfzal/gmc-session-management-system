import { Outlet } from "react-router-dom";
import Footer from "../shared/components/layout/Footer";
import Navbar from "../shared/components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
