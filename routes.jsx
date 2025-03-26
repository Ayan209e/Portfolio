import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Address } from "./src/pages/Address";
import { Profile } from "./src/pages/Profile";
import { HomePage } from "./src/pages/HomePage";

const AppRoutes = ({ sectionRefs }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage sectionRefs={sectionRefs} />} />
        <Route path="/projects/profile-revamp" element={<Profile />} />
        <Route path="/projects/address-revamp" element={<Address />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
