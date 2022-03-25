import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    console.log(cart)
    return (
        <div className='cart'>
            {
        cart.map((item)=> <CartDetails key={item.id} details = {item}></CartDetails> )
      }
            <div>
                <button className='btn btn-primary my-3'>Choose 1 For Me</button>
                <button className='btn btn-success'>Choose Again</button>
            </div>
        </div>
    );
};
export default Cart;