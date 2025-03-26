import twoGood from "/src/assets/images/two-good-main.png";
import miranda from "/src/assets/images/miranda.png";
import imageSearchEngine from "/src/assets/images/image-search-engine.png";
import profile from "/src/assets/images/profile-main.png";
import address from "/src/assets/images/address-list.png";
import signup from "/src/assets/images/signup.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 mb-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://two-good-two.vercel.app/"
            img={twoGood}
            alt="two good project mockup"
            name="Two Good Co."
            type="Rebuild • Animated UI • Smooth UX • Performance • Redux"
            year="2025"
            tools="React.js • GSAP • Redux"
          />
        </div>

        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://ayan209e.github.io/Miranda"
            img={miranda}
            alt="miranda landing page mockup"
            name="Niccolò Miranda"
            type="Retro UI • Smooth Animations • Interactive Scroll • Performance"
            year="2024"
            tools="HTML • CSS • JavaScript"
          />
        </div>

        {/* Project #3 */}
        <div className="col-span-1 h-fit md:col-span-5">
          <Projects
            link="/projects/address-revamp"
            img={address}
            alt="address revamp page mockup"
            name="Address Revamp"
            type="Carrefour • Frontend Development"
            year="2024"
            tools="Next.js • TailwindCSS • TypeScript"
          />
        </div>

        {/* Project #4 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="/projects/profile-revamp"
            img={profile}
            alt="profile revamp page mockup"
            name="Profile Revamp"
            type="Carrefour • Frontend Development"
            year="2025"
            tools="Next.js • TailwindCSS • TypeScript"
          />
        </div>

        {/* Project #5 */}
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://www.carrefouruae.com/login/register"
            img={signup}
            alt="signup revamp mockup"
            name="Sign Up Revamp"
            type="Carrefour • Frontend Development"
            year="2024"
            tools="Next.js • TypeScript • Redux"
          />
        </div>

        {/* Project #3 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-12 md:pt-20">
          <Projects
            link="https://ayan209e.github.io/Image-Search-Engine/"
            img={imageSearchEngine}
            alt="image search engine project mockup"
            name="Image Search Engine"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
