import React from "react";
import address from "/src/assets/images/address-list.png";
import map from "/src/assets/images/address-map.png";
import form from "/src/assets/images/address-form.png";
import confirm from "/src/assets/images/confirm-address.png";
import Projects from "../components/ui/Projects";
import Heading from "../components/ui/Heading";

export const Address = () => {
  return (
    <section
      id="works"
      className="nav-change overflow-hidden py-[25%] md:py-[10%]"
    >
      <Heading title="Address Revamp" />
      <div className="mb-10 mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile"
            img={address}
            alt="address list mockup"
            name="Address List Screen"
            type="Improved address handling with Next.js, enabling edits and reducing unverified addresses by 20% for better delivery accuracy."
            year="2024"
            tools="SDE Intern • MAF Carrefour"
            darkText
          />
        </div>

        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile/edit-profile"
            img={map}
            alt="address map mockup"
            name="Address Map Screen"
            year="Interactive Map"
            tools="Seamless Google Maps integration"
            darkText
            type="An interactive map view leveraging Google Maps, allowing users to pinpoint locations accurately, ensuring precise address selection and navigation."
          />
        </div>

        {/* Project #3 */}
        <div className="col-span-1 h-fit md:col-span-5">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile"
            img={form}
            alt="address form mockup"
            name="Address Form Screen"
            year="Easy Input"
            tools="Simplified Address Entry"
            darkText
            type="A streamlined address input form with clear fields and smart suggestions, making it quick and hassle-free for users to add new addresses."
          />
        </div>

        {/* Project #4 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-12 md:pt-10">
          <Projects
            link="https://carrefouruae.com/mafuae/en/profile/reset-password"
            img={confirm}
            alt="confirm address mockup"
            name="Confirm Address Screen"
            tools="Verify before saving"
            year="Quick Confirmation"
            darkText
            type="A confirmation screen displaying entered address details, ensuring users can review and validate their information before finalizing, reducing errors."
          />
        </div>
      </div>
    </section>
  );
};
