import { useState } from "react";
import Slider from "./Components/Slider";
import './Components/style.css';

const About = () => {

  const [showMore, setShowMore] = useState(false);
  const fullText = "At our Company, we specialize in designing and manufacturing compact, high-performance Mini PCs tailored for modern digital needs. Combining cutting-edge technology with space-saving design, our systems deliver powerful computing in sleek, energy-efficient form factors. From home offices and digital signage to industrial automation and edge computing, our Mini PCs are built to handle diverse applications without compromising performance or reliability. With a focus on quality, customization, and innovation, we aim to meet the evolving demands of businesses and consumers around the world.Whether you need fanless systems for harsh environments, all-in-one solutions for retail, or ultra-compact PCs for minimalistic setups, our Company is your trusted partner in efficient computing. "

  return (
    <div>
      <div className="container">
        <h2 className="header">About Company</h2>
      </div>

      <div className="container">
        <Slider autoPlay autoPlayTime={4000} />
      </div>

      <div>
        <p className="par">
          {showMore ? fullText : fullText.substring(0, 220) + "... "}
          <button className="btn"
          onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}</button>
        </p>
      </div>


      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Elena B – Web Developer</h3>
            <p>All images, prices and information are for demo purposes only.</p>
            <br />
            <div className="fb">
              <a
                href="https://www.linkedin.com/in/elena-b-tw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://github.com/elenabztw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="credit">Created by Elena B</p>
      </footer>
    </div>
  );
};

export default About;

// const About = () => (
  
//   <div>
//     <div className="container">
//       <h2 className="header">About Company</h2>
//     </div>

//     <div className="container">
//       <Slider autoPlay autoPlayTime={4000} />
//     </div>
//     <div>
//       <p className="par">At our Company, we specialize in designing and manufacturing compact, high-performance Mini PCs tailored for modern digital needs. Combining cutting-edge technology with space-saving design, our systems deliver powerful computing in sleek, energy-efficient form factors.<br />
//           From home offices and digital signage to industrial automation and edge computing, our Mini PCs are built to handle diverse applications without compromising performance or reliability. With a focus on quality, customization, and innovation, we aim to meet the evolving demands of businesses and consumers around the world.
//           Whether you need fanless systems for harsh environments, all-in-one solutions for retail, or ultra-compact PCs for minimalistic setups, our Company is your trusted partner in efficient computing.
//       </p>
//     </div>

//     <div className="footer">
//       <div className="box-container">
//         <div className="box">
//           <h3>Elena B web developer</h3>
//           <p>All images, prices and information are for demo purposes only</p> <br/>
//           <div className="fb">
//             <a href="https://www.linkedin.com/in/elena-b-tw/"><i className="bx bxl-linkedin-square"></i></a>
//             <a href=""><i className="bx bxl-instagram"></i></a>
//             <a href="https://github.com/elenabztw"><i className="bx bxl-github"></i></a>
//           </div>
//         </div>
//       </div>
//       <p className="credit">created by Elena B</p>
//     </div>
//   </div>
  
// );

// export default About;


// import React from "react";
// import Slider from "./Components/Slider";

// import './Components/style.css';


// function About () {

//     return(<div className="box">
//         <h2 className="header">About Company</h2>
//         <Slider />
//     </div>)
// }

// export default About;