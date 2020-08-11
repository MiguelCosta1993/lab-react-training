import React from 'react';

import './BoxColor.css';

const BoxColor = (props) => {
  return (
    <div
      className="Box-Color"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      <p>
        rgb ({props.r} , {props.g} , {props.b} )
      </p>
    </div>
  );
};

export default BoxColor;
