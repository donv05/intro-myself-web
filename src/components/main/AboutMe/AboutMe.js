import React, { useState } from "react";
import "./aboutMe.scss";
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
        <div className="card-intro card-intro--border">
            <div className="card-intro__img-box">
                <div
                    className="card-intro__img"
                    onMouseMove={hoverImg}
                    style={{
                    backgroundPosition: `calc(50% + ${divStyle.x}px) calc(50% + ${divStyle.y}px)`
                    }}
                ></div>
            </div>
            <div className="card-intro__body">
                <h2 className="card-intro__title">Software Engineering</h2>
                <h2 className="card-intro__name">Đô Nguyễn</h2>
                <p>
                    My name is Đô, I'm 27 years old. I'm born in a small country it's
                    xxx.
                </p>
            </div>
        </div>

        <PromoItem></PromoItem>

        <div className="card-info card-info--border box-container">
            <div className="card-info-des">
                <h2 className="card-info-des__title heading-secondary">Skills</h2>
                <div className="card-info-des__body card-info-des--body-grid">
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg" width="100" height="100"  alt="img" src={'/image/logo/angular.jpg'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg" width="100" height="100"  alt="img" src={'/image/logo/nodejs.jpg'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg" width="100" height="100" alt="img" src={'/image/logo/js.png'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg"width="100" height="100"  alt="img" src={'/image/logo/reactjs.png'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg" width="100" height="100" alt="img" src={'/image/logo/html.png'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg" width="100" height="100" alt="img" src={'/image/logo/css.png'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg" width="100" height="100" alt="img" src={'/image/logo/icon-express.png'} />
                    </div>
                    <div className="card-info-des__img-box">
                        <img className="card-info-des__img icon-lg"width="100" height="100"  alt="img" src={'/image/logo/boostrap.png'} />
                    </div>
                </div>
            </div>
        </div>

        <div className="card-info card-info--border box-container">
            <div className="card-info-des">
                <h2 className="card-info-des__title heading-secondary">Contact</h2>
                <div className="card-info-des__body">
                    <p class="card-info-des__tag">Phone: 
                        <span class="card-info-des__txt">0813 285 634</span> 
                    </p>
                    <p class="card-info-des__tag">Email: 
                        <span class="card-info-des__txt">Nguyen Van Do</span> 
                    </p>
                    <p class="card-info-des__tag">Address: 
                        <span class="card-info-des__txt">12 District, Ho Chi Minh City</span> 
                    </p>
                    <p class="card-info-des__tag">Social Media: 
                        <span class="card-info-des__txt">Facebook</span> 
                    </p>
                </div>
            </div>
        </div>

        <div className="card-info card-info--border box-container">
            <div className="card-info-des">
                <h2 className="card-info-des__title heading-secondary">Other</h2>
                <div className="card-info-des__body">
                    <p> Can you work with me?</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default AboutMe;
