import React from 'react';

function Button(props) {
  return (
    <div className="button">
      <a href="#">{props.price}</a>
      <a className="cart-btn" href="#">{props.cart}</a>
    </div>
  );
}
export default Button;
