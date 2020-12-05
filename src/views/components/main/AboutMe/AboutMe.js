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
        <div className="card-img-info card--border">
            <div className="card-img-info--photo">
                <div
                    className="hp-inner"
                    onMouseMove={hoverImg}
                    style={{
                    backgroundPosition: `calc(50% + ${divStyle.x}px) calc(50% + ${divStyle.y}px)`
                    }}
                ></div>
            </div>
            <div className="card-img-info-body">
                <h2 className="card-img-info-body__title">Software Engineering</h2>
                <h2 className="card-img-info-body__name">Đô Nguyễn</h2>
                <p>
                    My name is Đô, I'm 27 years old. I'm born in a small country it's
                    xxx.
                </p>
            </div>
        </div>

        <PromoItem></PromoItem>

        <div className="card-info card--border">
            <div className="card-info-description">
                <h2 className="card-info-description__title">Skills</h2>
                <div className="card-info-description__body card-info-description--body-grid">
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/angular.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/nodejs.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/js.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/reactjs.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/html.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/css.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/icon-express.png'}  className="icon-lg"/>
                    </div>
                    <div className="card-info-description__body-img">
                        <img alt="img" src={'/image/logo/boostrap.png'}  className="icon-lg"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="card-info card--border">
            <div className="card-info-description">
                <h2 className="card-info-description__title">Contact</h2>
                <div className="card-info-description__body">
                    <b>Phone</b>: <p>xxx</p>
                    <b>Email</b>: <p>xxx</p>
                    <b>Address</b>: <p>xxx</p>
                    <b>Social Media</b>: <p>xxx</p>
                </div>
            </div>
        </div>

        <div className="card-info card--border">
            <div className="card-info-description">
                <h2 className="card-info-description__title">Other</h2>
                <div className="card-info-description__body">
                    <p> Can you work with me?</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default AboutMe;
