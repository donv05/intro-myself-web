import React, { useState } from 'react';
import './aboutMe.css'
import PromoItem from './promoItem/promoItem'
function AboutMe() {
  const [name, setName] = useState('Mary');
  return (
    <React.Fragment>
      <div className="row"> 
        <div className="col-6 home-photo">
          <div className="hp-inner"></div>
        </div>
        <div className="col-6 card-info">
          <h2 className="title-job">Software Engineering</h2>
          <h2 className="title-name">Do Nguyen</h2>
          <p>My name is Đô, I'm 27 years old. I'm born in a small country it's Hung yen. </p>
        </div>
      </div>
      <PromoItem></PromoItem>
    </React.Fragment>
  );
}

export default AboutMe;