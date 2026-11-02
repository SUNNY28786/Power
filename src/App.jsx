import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Industries from "./Components/Industries";
import Vptl from "./Components/Vptl";
import Industrial from "./Components/Industrial";
import Adminlogin from "./Components/Adminlogin";

// Header + Footer wala layout
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header/Footer ke saath */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/vptl" element={<Vptl />} />
          <Route path="/industrial" element={<Industrial />} />
        </Route>

        {/* Bina Header/Footer ke */}
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;