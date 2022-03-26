import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'

const Cart = ({cartItme,chooseOne,chooseAgain}) => {

    return (
        <div className='cart'>
            {
        cartItme.map((item)=> <CartDetails key={item.id} details = {item}></CartDetails> )
      }
            <div>
                <button onClick={()=> chooseOne(cartItme)} className='btn btn-primary my-3'>Choose 1 For Me</button>
                <button onClick={()=>chooseAgain(cartItme)} className='btn btn-success'>Choose Again</button>
            </div>
        </div>
    );
};
export default Cart;