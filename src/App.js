import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NavbarComp from "./components/Navbar";
import AddProduct from "./pages/AddProducts"
import Profiles from "./components/Profiles";
import ProfilePartners from "./pages/ProfilePartners";
import Detail from "../src/components/Detail";



function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/detail-menu" element={<Detail/>} />
        <Route exact path="/add-products" element={<AddProduct />} />
        <Route exact path="/profiles" element={<Profiles />} />
        <Route exact path="/profile-partners" element={<ProfilePartners />} />
      </Routes>
    </Router>
  );
}

export default App;





