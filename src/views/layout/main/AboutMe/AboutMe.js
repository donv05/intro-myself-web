import React, { useState } from "react";
import "./aboutMe.css";
import PromoItem from "./promoItem/promoItem";
function AboutMe() {
  const [divStyle, setDivStyle] = useState({ x: "6.24623", y: "6.24623" });

  function hoverImg(evt) {
    setDivStyle({
      x: (1+ evt.clientX) / 100,
      y: (1 + evt.clientY) / 100
    });
  }
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6 home-photo">
          <div
            className="hp-inner"
            onMouseMove={hoverImg}
            style={{
              backgroundPosition: `calc(50% + ${divStyle.x}px) calc(50% + ${divStyle.y}px)`
            }}
          ></div>
        </div>
        <div className="col-6 card-info">
          <h2 className="title-job">Software Engineering</h2>
          <h2 className="title-name">Đô Nguyễn</h2>
          <p>
            My name is Đô, I'm 27 years old. I'm born in a small country it's
            xxx.
          </p>
        </div>
      </div>

      <div className="center animate__animated animate__fadeInLeft">
        <div className="property-card">
          <div className="property-description">
            <h2 className="animate__animated animate__bounce">My Skills</h2>
              <div className="py-2">
              </div>
            </div>
        </div>
        </div>
      <PromoItem></PromoItem>
    </React.Fragment>
  );
}

export default AboutMe;
