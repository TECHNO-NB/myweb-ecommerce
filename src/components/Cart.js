import React, { useContext } from 'react'
import "./Cart.css";

const Cart = () => {
 
 return (
   <div className="cart-main">
    <h1>Welcome To Cart Seccion</h1>
    <div className="cart-box">
      <img src='../jacket.png'/>
      <p className='product-name'>Jacket</p>
     <p className='product-details'>this is ver cools </p>
     <div className="add-less">
      <p>+</p>
      <input type='number' disabled value={1}></input>
      <p>-</p>
     </div>
     <p className='price'>$3.4</p>
    </div>
   </div>
  );
};



export default Cart