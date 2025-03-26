import React from "react";
import profile from "/src/assets/images/profile-main.png";
import mweb from "/src/assets/images/profile-mweb.png";
import edit from "/src/assets/images/edit-profile.png";
import reset from "/src/assets/images/reset-pass.png";
import Projects from "../components/ui/Projects";
import Heading from "../components/ui/Heading";

export const Profile = () => {
  return (
    <section
      id="works"
      className="nav-change overflow-hidden py-[25%] md:py-[10%]"
    >
      <Heading title="Profile Revamp" />
      <div className="mb-10 mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile"
            img={profile}
            alt="profile web mockup"
            name="User Profile Screen"
            type="Redesigning the user profile screen with a modern, user-friendly UI to simplify profile management and better access to user benefits."
            year="2025"
            tools="SDE Intern • MAF Carrefour"
            darkText
          />
        </div>

        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile/edit-profile"
            img={edit}
            alt="edit profile page mockup"
            name="Edit Profile Screen"
            year="Easy Editing"
            tools="Simplified Profile Management"
            darkText
            type="A user-friendly edit profile screen that allows seamless updates to personal information with clear input fields and an intuitive design for effortless modifications."
          />
        </div>

        {/* Project #3 */}
        <div className="col-span-1 h-fit md:col-span-5">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile"
            img={mweb}
            alt="profile mweb page mockup"
            name="Profile Screen"
            year="M-Web"
            tools="Responsive Development"
            darkText
            type="A redesigned profile screen optimized for mobile web, ensuring smooth usability, improved touch interactions, and seamless access to user information."
          />
        </div>

        {/* Project #4 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-12 md:pt-10">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile/reset-password"
            img={reset}
            alt="reset password page mockup"
            name="Reset Password Screen"
            tools="Next.js • TailwindCSS • TypeScript"
            year="New Feature"
            darkText
            type="A newly introduced reset password feature that provides a secure and user-friendly flow for updating credentials, ensuring better account protection."
          />
        </div>
      </div>
    </section>
  );
};
