import React from "react";
import "../styles/hero.css";
const Hero = () => {
  return (
    <main className="mainSection">
      <div className="container">
        <div className="content">
          <h1 className="content_heading">LETS WATCH MOVIE TOGETHER</h1>
          <p className="content_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            blanditiis?
          </p>

          <button className="cover_button">Explore Now</button>
        </div>
        <div className="coverimage"></div>
      </div>
    </main>
  );
};

export default Hero;
