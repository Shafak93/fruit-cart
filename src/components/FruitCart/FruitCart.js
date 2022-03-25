import React from 'react';
import { Card } from 'react-bootstrap';
import './FruitCart.css';

const FruitCart = ({fruit,addToCartHandler}) => {
    const {id,name, img,price,} = fruit
    // const {addToCartHandler} = props
    return (
        
            <div className='fruit'>
                <img src={img} alt="" />
                <div className='fruit-info'>
                    <p className='fruit-name'>{name}</p>
                    <p>Price: ${price}</p>
                </div>
                <button onClick={()=> addToCartHandler(fruit)} className='btn-cart'>
                    <p className='btn-text'>Add To Cart</p>
                    {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
                </button>
            </div>
       
    );
};

export default FruitCart;