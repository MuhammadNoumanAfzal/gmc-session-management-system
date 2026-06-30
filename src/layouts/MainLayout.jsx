import { Outlet } from "react-router-dom";
import Footer from "../shared/components/layout/Footer";
import Navbar from "../shared/components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0F0715] text-[var(--color-text)]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-2 py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
