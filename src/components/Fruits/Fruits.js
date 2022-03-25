import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FruitCart from '../FruitCart/FruitCart';
import './Fruits.css'

const Fruits = () => {

    const [fruits, setFruits] = useState([])
    const [cart, setCart] = useState([]);

    const addToCartHandler =(fruit)=>{
        const newCart = [...cart,fruit]
        setCart(newCart);
    }
    useEffect(()=>{
        fetch('fruitDB.json')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])
    return (
        <div>
            <h1>This is fruits section</h1>
            <div className='fruit-container'>
            
                <div className='fruitCart-container'>
                {
                    fruits.map((fruit)=> <FruitCart key = {fruit.id} fruit = {fruit} addToCartHandler = {addToCartHandler}></FruitCart>)
                }
                </div>
            
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Fruits;