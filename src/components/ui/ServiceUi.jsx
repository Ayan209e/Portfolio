import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

export default function ServiceUi({
  title,
  description,
  items,
  contents = [],
}) {
  const serviceUi = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);
  const services = useRef(null);
  const line = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      // markers: true,
      start: "150px bottom",
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
        )
        .to(
          line.current,
          { width: "100%", ease: "power4.inOut", duration: 1.5 },
          0.2
        )
        .to(
          services.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.5
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [serviceUi]);

  return (
    <div
      ref={serviceUi}
      className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24"
    >
      <div className="space-y-6">
        <div className="space-y-3 2xl:space-y-10">
          <h3
            ref={heading}
            className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
          >
            {title}
          </h3>
          <div
            ref={body}
            className="max-w-md translate-y-10 text-body-1 opacity-0  xl:max-w-2xl 2xl:text-3xl"
          >
            {description}
            {contents &&
              contents.map((content, index) => {
                return (
                  <p key={index} className="pt-2 opacity-50 2xl:text-xl">
                    {content}
                  </p>
                );
              })}
          </div>
        </div>
        <div
          ref={line}
          className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
        ></div>
      </div>

      <div
        ref={services}
        className="translate-y-10 select-none pt-2 leading-[2.3rem] text-secondary-500 opacity-0  md:leading-[2.5rem] lg:leading-[3.4rem]"
      >
        {items.map((item, index) => {
          return (
            <p
              key={index}
              className="font-general text-special font-extrabold 2xl:text-5xl"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
