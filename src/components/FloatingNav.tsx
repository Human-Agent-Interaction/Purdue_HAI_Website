import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import haiLabLogo from "../../assets/HAI_LAB.gif";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/publications", label: "Publications" },
  { path: "/people", label: "People" },
  { path: "/news", label: "News" },
  { path: "/join", label: "Join Us" }
];

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 flex justify-center pt-4 nav:pt-6"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.nav
        className={clsx(
          "floating-island flex w-[min(1280px,95%)] items-center justify-between gap-4 rounded-[28px] px-4 py-2 nav:rounded-[32px] nav:px-8",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isMenuOpen ? "backdrop-blur-md" : ""
        )}
        animate={{
          paddingTop: isScrolled ? 8 : 12,
          paddingBottom: isScrolled ? 8 : 12,
          width: isScrolled ? "min(1200px, 90%)" : "min(1280px, 95%)",
          boxShadow: isScrolled
            ? "0 16px 34px rgba(176, 138, 51, 0.22)"
            : "0 20px 42px rgba(176, 138, 51, 0.18)",
          borderColor: isScrolled
            ? "rgba(176,138,51,0.32)"
            : "rgba(176,138,51,0.24)"
        }}
      >
        <div className="flex items-center gap-3 text-ink nav:gap-4">
          <div className="flex h-12 w-24 items-center justify-center overflow-hidden rounded-[24px] border border-accent/20 bg-white/95 shadow-[0_14px_42px_rgba(15,29,52,0.18)] nav:h-16 nav:w-32 nav:rounded-[28px]">
            <img
              src={haiLabLogo}
              alt="HAI Lab Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden nav:block">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-inkMuted nav:text-base">
              Purdue University
            </p>
            <p className="font-display text-xl font-semibold text-ink">
              Human-Agent Interaction Laboratory
            </p>
          </div>
          <div className="nav:hidden">
            <p className="font-display text-sm font-semibold text-ink">
              HAI Lab · Purdue
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 nav:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth={1.8}
            fill="none"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-1 nav:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                {({ isActive: activeFromNav }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    <AnimatePresence>
                      {(isActive || activeFromNav) && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-accentLight/80 backdrop-blur"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-sm nav:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-x-4 top-24 z-40 rounded-[28px] border border-accentLight/70 bg-white/95 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.16)] nav:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/"}
                      className={clsx(
                        "flex w-full items-center justify-between rounded-[18px] border border-accentLight/60 px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-accent text-white"
                          : "bg-white text-ink hover:border-accent hover:text-accent"
                      )}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden className="text-xs uppercase tracking-[0.28em]">
                        {isActive ? "Active" : "Go"}
                      </span>
                    </NavLink>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default FloatingNav;
