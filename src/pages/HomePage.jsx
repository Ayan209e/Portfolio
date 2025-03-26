import React from "react";
import Role from "../components/homepage/Role";
import About from "../components/homepage/About";
import Services from "../components/homepage/Services";
import Experience from "../components/homepage/experience";
import Works from "../components/homepage/Works";
import Hero from "../components/homepage/Hero";

export const HomePage = ({ sectionRefs }) => {
  return (
    <div>
      <Hero />
      <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
      {/* forwardedRef props to pass into the child component to access the ref, then this will go into the useRef array  */}
      <About />
      <Services />
      <Experience />
      <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
    </div>
  );
};
