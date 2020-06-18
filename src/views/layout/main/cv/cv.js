import React, { useState } from 'react';
import './cv.css'
import PromoItem from './promoItem/promoItem'
function CV() {
  const [name, setName] = useState('Mary');
  return (
    <React.Fragment>
      <PromoItem></PromoItem>
    </React.Fragment>
  );
}

export default CV;