import React, { useEffect, useState } from 'react';
import './Box.css';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Box({slide, addToBasket}) {

  
  return (
    <div className="box">
      <img className="slideImage" src={slide.thumbnailUrl} alt={slide.title} />
        {slide.title}
      <div className="basket">
        <button className="addCartButton" onClick={() => addToBasket(slide)}>
        <Icon name="add to cart"/> Sepete Ekle
        </button>
      </div>
    </div>
);
}

export default Box;
