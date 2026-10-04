import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { config } from "../../constants/config";
import Logo from "../atoms/Logo";
import ThemeToggle from "../atoms/ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Combined scroll handler for performance (single listener instead of two)
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;

    // Handle navbar background
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
      setActive("");
    }

    // Handle active section highlighting
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((current) => {
      const sectionId = current.getAttribute("id");
      const sectionHeight = (current as HTMLElement).offsetHeight;
      const sectionTop =
        current.getBoundingClientRect().top - sectionHeight * 0.2;

      if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
        setActive(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <>
      <nav
        className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${
          scrolled
            ? "bg-[#050816]/80 shadow-lg backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Logo className="h-11 w-11 transition-transform duration-300 group-hover:scale-105" />
            <p className="flex cursor-pointer text-[18px] font-bold text-white ">
              {config.html.title.split("—")[0].trim()}
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex list-none flex-row gap-8">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.id ? "text-white" : "text-secondary"
                  } group relative cursor-pointer text-[16px] font-medium transition-colors duration-200 hover:text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-[#00cea8] transition-all duration-300 ${active === nav.id ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            {/* CV Download Button */}
            <a
              href={config.resume.path}
              download={config.resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00cea8] px-5 py-2 text-[13px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-[0_8px_30px_rgba(145,94,255,0.4)]"
            >
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download My Resume
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setToggle(true)}
              className="text-white focus:outline-none"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer — rendered via portal to document.body so it's not
          constrained by the nav's stacking context or backdrop-blur */}
      {createPortal(
        <div className="lg:hidden">
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              toggle ? "opacity-100 visible" : "invisible opacity-0 pointer-events-none"
            }`}
            onClick={() => setToggle(false)}
          />

          {/* Drawer Panel */}
          <div
            className={`fixed inset-y-0 right-0 z-[999] flex w-[75vw] sm:w-[350px] flex-col bg-[#110e1b] pl-8 pr-10 py-8 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end">
              <button
                aria-label="Close menu"
                onClick={() => setToggle(false)}
                className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-white/10 focus:outline-none"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <ul className="mt-16 flex flex-col gap-6">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer border-b border-white/5 pb-4 text-[18px] font-semibold tracking-wide ${
                    active === nav.id ? "text-white" : "text-secondary"
                  } transition-colors duration-200 hover:text-[#915EFF]`}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`} className="block w-full">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={config.resume.path}
                download={config.resume.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#915EFF] to-[#00cea8] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(145,94,255,0.2)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_25px_rgba(145,94,255,0.4)]"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download My Resume
              </a>
            </div>

            <div className="mt-auto border-t border-white/10 pt-6 text-center">
              <p className="text-[12px] text-secondary">
                © {new Date().getFullYear()} {config.html.fullName}.
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;