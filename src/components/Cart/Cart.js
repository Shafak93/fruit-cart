import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    console.log(cart)
    return (
        <div className='cart'>
            {
        cart.map((item)=>(<h1 key={item.id}>{item.name}</h1>))
      }
        </div>
    );
};

export default Cart;