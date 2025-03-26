import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Experience() {
  const maf = [
    "SDE - Intern",
    "Web Developer",
    "2024 - Present",
  ];

  const ineubytes = [
    "Web Developer",
    "Full Stack Web",
    "2023",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="Work History" />
      <div className="space-y-14">
        <ServiceUi
          title="MAF Carrefour"
          description="Working on several ongoing live initiatives. Sole Ownership of a business making service - Partnership Portal."
          items={maf}
        />
        <ServiceUi
          title="iNeubytes"
          description="Worked on 3 projects, helped the business grow. Developed an Image Search Engine, a landing page and frontend web of an ecommerce brand."
          items={ineubytes}
        />
      </div>
    </section>
  );
}
