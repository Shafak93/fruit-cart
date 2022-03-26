import React from 'react';
import { Card } from 'react-bootstrap';
import './FruitCart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const FruitCart = ({fruit,addToCartHandler}) => {
    const {name, img,price} = fruit
    return (
        
            <div className='fruit'>
                <img src={img} alt="" />
                <div className='fruit-info'>
                    <p className='fruit-name'>{name}</p>
                    <p>Price: ${price}</p>
                </div>
                <button onClick={()=> addToCartHandler(fruit)} className='btn-cart'>
                    <p>Add To Cart</p>
                   <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </button>
            </div>
       
    );
};

export default FruitCart;