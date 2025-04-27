import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Experience() {
  const maf = [
    "SDE - Intern",
    "Frontend Web Developer",
    "2024 - Present",
    `(${calculateDuration("2024-03-01")})`,
  ];

  const mafContents = [
    "· Profile Revamp – Redesigning the user profile screen with a modern, user-friendly UI to simplify profile management and better access to user benefits.",
    "· Address Management Revamp – Improved address handling with Next.js, enabling edits and reducing unverified addresses by 20% for better delivery accuracy.",
    "· Partnership Portal – Developed a React.js portal for partner onboarding, adding 100K+ new customers from two initial partners.",
    "· Sign-Up Optimization – Streamlined registration with Next.js and TypeScript, reducing sign-up time by 30% and failures by 70%.",
  ];

  const ineubytes = ["Intern", "Web Developer", "2023", "(2 mos)"];

  const ineubytesContents = [
    "· Developed an image search engine with React.js, Tailwind CSS, and the Pexels API for fast and accurate image retrieval.",
    "· Built a responsive landing page for a digital marketing firm using React.js, enhancing user engagement and SEO.",
    "· Collaborated with design and development teams to deliver solutions aligned with client requirements.",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="Work History" />
      <div className="space-y-14">
        <ServiceUi
          title="MAF Carrefour"
          contents={mafContents}
          items={maf}
          description="At Carrefour, a leading e-commerce multinational in the middle-east, I contribute to building scalable, high-performance web solutions that enhance user experience and drive business growth. Here are some key projects I’ve worked on:"
        />
        <ServiceUi
          contents={ineubytesContents}
          title="iNeubytes"
          description="Worked on 3 projects, helped the business grow. Developed an Image Search Engine, a landing page and frontend web of an ecommerce brand."
          items={ineubytes}
        />
      </div>
    </section>
  );
}

const calculateDuration = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();
  const totalMonths = years * 12 + months + 1;

  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  if (displayYears > 0 && displayMonths > 0) {
    return `${displayYears} yr${
      displayYears > 1 ? "s" : ""
    } ${displayMonths} mo${displayMonths > 1 ? "s" : ""}`;
  } else if (displayYears > 0) {
    return `${displayYears} yr${displayYears > 1 ? "s" : ""}`;
  } else {
    return `${displayMonths} mo${displayMonths > 1 ? "s" : ""}`;
  }
};
