import React, { useEffect, useState } from 'react';
import './sepet.css';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Sepet({slide}) {

  return (
    <div className="sepetDiv">
      <img className="sepetImg" src={slide.thumbnailUrl} alt={slide.title} />
        <div className="slideTitle">{slide.title}</div>
        
    </div>
);
}

export default Sepet;
