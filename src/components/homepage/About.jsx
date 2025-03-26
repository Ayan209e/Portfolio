import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.jpeg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
            >
              Who Am I?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 opacity-0 2xl:text-4xl"
            >
              I’m a frontend web developer based in Gurgaon, currently working
              at MAF Carrefour.
              <br></br>
              <br></br>I specialize in building high-performance, interactive
              websites with a strong focus on smooth animations and engaging
              user experiences.
              <br></br>
              <br></br>
              When I’m not working, I love designing and developing interactive,
              animated websites and sharing them to inspire and help others
              learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
