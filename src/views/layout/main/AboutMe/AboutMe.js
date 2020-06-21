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
      <div className="row animate__animated animate__backInDown">
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
      <PromoItem></PromoItem>
      <div className="center animate__animated animate__fadeInLeft">
        <div className="property-card">
        <a href="#">
            <div className="property-image">
              <div className="property-image-title">
                {/* <h5>Card Title</h5>  */}
              </div>
            </div>
          </a>
          <div className="property-description">
            <h2 className="animate__animated animate__bounce">Skills</h2>
              <div className="py-2 content">
                <img src={'/angular.png'}  className="icon-lg mx-4"/>
                <img src={'/nodejs.png'}  className="icon-lg mx-4"/>
                <img src={'/reactjs.png'}  className="icon-lg mx-4"/>
                <img src={'/css.png'}  className="icon-lg mx-4"/>
                <img src={'/icon-html.png'}  className="icon-lg mx-4"/>
                <img src={'/icon-express.png'}  className="icon-lg mx-4"/>
              </div>
            </div>
        </div>
      </div>


      <div className="row">
        <div className="col-6">
          <div className="center animate__animated animate__fadeInLeft">
          <div className="property-card">
          <a href="#">
              <div className="property-image">
                <div className="property-image-title">
                  {/* <h5>Card Title</h5>  */}
                </div>
              </div>
            </a>
            <div className="property-description">
              <h2 className="animate__animated animate__bounce">Contact</h2>
                <div className="py-2 content">
                <b>Phone</b>: <p>xxx</p>
                <b>Email</b>: <p>xxx</p>
                <b>Address</b>: <p>xxx</p>
                <b>Social Media</b>: <p>xxx</p>
                </div>
              </div>
          </div>
        </div>
        </div>
        <div className="col-6">
          <div className="center animate__animated animate__fadeInLeft">
          <div className="property-card">
          <a href="#">
              <div className="property-image">
                <div className="property-image-title">
                  {/* <h5>Card Title</h5>  */}
                </div>
              </div>
            </a>
            <div className="property-description">
              <h2 className="animate__animated animate__bounce">Other</h2>
                <div className="py-2 content">
                    Can you work with me?
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
      
      
    </React.Fragment>
  );
}

export default AboutMe;
