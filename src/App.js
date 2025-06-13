// import React from "react";
// import "./App.css";
// import Services from "./components/Services";


// function App() {
//   return (
//     <div className="app">
//      <video autoPlay muted loop id="bg-video">
//   <source src="/vid.mp4" type="video/mp4" />
//   Your browser does not support HTML5 video.
// </video>
// <div className="bg-overlay"></div>
//       <div className="overlay">
//         <nav className="navbar">
//           <div className="logo">SENKUSHA</div>
//           <ul className="nav-links">
//             <li>Home</li>
//             <li>Services</li>
//             <li>About Us</li>
//             <li>AI Capabilities</li>
//             <li>Our Products</li>
//             <li>Testimonials</li>
//             <li>Careers</li>
//           </ul>
//         </nav>
//       <div className="hero">
//           <h1>Innovation meets Quality Solutions</h1>
//           {/* <p>Innovation meets Quality Solutions</p> */}
//           <button className="start-btn">Let’s start</button>
//         </div>

    
        
//       </div>
//       {/* <Services /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Services from "./components/Services";

function App() {
  return (
    <div className="app">
      <video autoPlay muted loop id="bg-video">
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="bg-overlay"></div>

      <div className="overlay">
        <nav className="navbar">
          <div className="logo">SENKUSHA</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#ai">AI Capabilities</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </nav>

        <div className="hero" id="home">
          <h1>Innovation meets Quality Solutions</h1>
          <button className="start-btn" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            Let’s start
          </button>
        </div>
      </div>

      {/* Add this outside overlay so it scrolls below the hero */}
      <div id="services">
        <Services />
      </div>
    </div>
  );
}

export default App;
