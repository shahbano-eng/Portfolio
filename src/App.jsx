import React from "react";
import './index.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Work from "./Components/Work/Work.jsx";
import Education from "./Components/Education/Education.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import BlurBlob from './Components/BlurBlob.jsx';

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-black to-[#14532d] min-h-screen">
      {/* Green BlurBlob */}
      <BlurBlob 
        position={{ top: '35%', left: '20%' }} 
        size={{ width: '30%', height: '40%' }} 
      />

      {/* Grid Overlay with green & black subtle lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14532d1a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content */}
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
