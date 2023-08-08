import React, { useContext } from 'react'
import { LoginContext } from './Context/LoginContext';





const Cart = () => {
  const first=useContext(LoginContext);
  console.log(first)
 

  return (
    <div>Cart</div>
  )
}

export default Cart