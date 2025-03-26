import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TwoGood } from "./src/pages/TwoGood";
import { Miranda } from "./src/pages/Miranda";
import { ImageSearchEngine } from "./src/pages/ImageSearchEngine";
import { Address } from "./src/pages/Address";
import { Partnership } from "./src/pages/Partnership";
import { Signup } from "./src/pages/Signup";
import { Profile } from "./src/pages/Profile";
import { HomePage } from "./src/pages/HomePage";

const AppRoutes = ({ sectionRefs }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage sectionRefs={sectionRefs} />} />
        <Route path="/projects/two-good" element={<TwoGood />} />
        <Route path="/projects/niccolo-miranda" element={<Miranda />} />
        <Route
          path="/projects/image-search-engine"
          element={<ImageSearchEngine />}
        />
        <Route path="/projects/profile-revamp" element={<Profile />} />
        <Route path="/projects/address-revamp" element={<Address />} />
        <Route path="/projects/partnership-portal" element={<Partnership />} />
        <Route path="/projects/signup-revamp" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
