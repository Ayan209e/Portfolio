import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  const isHomePage = window.location.pathname === "/";

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    if (sectionRefs) {
      sectionRefs.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 375px",
          end: "bottom 300px",
          animation: gsap
            .timeline()
            .to(navBar.current, { color: "#DDDDD5" })
            .to(
              cta.current,
              { backgroundColor: "#D1D1C7", color: "#0E0E0C" },
              0
            )
            .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

          toggleActions: "restart reverse restart reverse",
        });
      });
    }
  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="/" aria-label="Logo" className="heroName z-50">
        ayan
      </a>

      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        {isHomePage && (
          <>
            <a href="/#about" className="group relative hidden md:inline-block">
              <span>about</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="group relative hidden md:inline-block"
            >
              <span>services</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a href="#works" className="group relative hidden md:inline-block">
              <span>projects</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <a
              href="/Resume.pdf"
              className="group relative hidden md:inline-block"
              target="_blank"
              rel="noreferrer"
              download
            >
              <span>resume</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </>
        )}
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
