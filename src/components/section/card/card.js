import React from 'react';
import Button from '../button/button';

function Card(props) {
  return (
    <div className="outer">
      <div className="content">
        <span className="bg">{props.offer}</span>
        <h1>{props.title}</h1>
        <h4>{props.text}</h4>
        <Button price="$124" cart="Add to Cart" />
        
      </div>
      <img src={props.img} className="imges"/>
    </div>
  );
}
export default Card;
