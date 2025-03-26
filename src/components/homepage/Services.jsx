import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Interactive Websites",
    "Performance Optimization",
    "Responsive UI",
  ];

  const toolBoxItems = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="My Expertises."
          description="I specialize in web development and interactive design, creating seamless, high-performance digital experiences. My goal is to build engaging, functional, and visually compelling web solutions that leave a lasting impact."
          items={expertiseItems}
        />
        <ServiceUi
          title="My Digital Tool Box."
          description="These are my go-to technologies for bringing projects to life. I’m always eager to refine my skills, explore new tools, and expand my knowledge to stay ahead in the ever-evolving tech landscape."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
