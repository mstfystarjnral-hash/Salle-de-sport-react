import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "contact" && <Contact />}
    </>
  );
}

export default App;
