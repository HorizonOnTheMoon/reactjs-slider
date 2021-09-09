import React, { useEffect, useState } from 'react';
import './Slider.css';
import { services } from "../Utils/Utils";
import Box from '../Box/Box';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Sepet from '../Sepet/sepet';

function Slider() {
  const [slides, setSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0)
  const [basket, setBasket] = useState([]);
  
  useEffect(() => {
    fetch(services.apiUrl+ '/photos').then(res => res.json()).then(res => setSlides(res.slice(0,50)))
    }, []
    );
  const setIndex = (i) => {
    if (i === 0){
      if (slideIndex < 45){
        setSlideIndex(slideIndex + 5)
      }
    }
    else if (i === 1){
      if (slideIndex >= 5 ){
        setSlideIndex(slideIndex - 5)
      }
    }
  };

  const addToBasket = (Slide) => {
    if (!basket.includes(Slide)){
      setBasket([...basket, Slide])
    }
  };

  return (
    <>
    <div className="slider">
      <button className={slideIndex === 0 ? "hide button" : "button"} onClick={() => setIndex(1)}>
        <Icon name="angle left" size='big'/>
        </button>
        {
        slides.length ? slides.slice(slideIndex,slideIndex+5).map(item =>(
          <div key={item.id} className="BoxElement">
            <Box slide={item} addToBasket={addToBasket} />
          </div>
        )) : (
          <div>Error</div>
        )
        }
      <button className={slideIndex === 45 ? "hide button" : "button"} onClick={() => setIndex(0)}>
        <Icon name="angle right" size='big' />
        </button>
    </div>
    <div className="sepet">
      <Icon name="cart" size='big' />
      <h2 className="SepetTitle">Sepet</h2>
    {
        basket.length ? basket.map(item =>(
          <>
          <div key={item.id} className="sepetItem">
             <Sepet slide={item} />
          </div>
          <hr className="px500"></hr>
          </>
        )) : (
          <div></div>
        )
        }
    </div>
    </>
  );
}

export default Slider;
