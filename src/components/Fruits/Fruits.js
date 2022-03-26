import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FruitCart from '../FruitCart/FruitCart';
import './Fruits.css'

const Fruits = () => {

    const [fruits, setFruits] = useState([])
    const [cart, setCart] = useState([]);

    //Add to cart handler function
    const addToCartHandler =(fruit)=>{
        const newCart = [...cart,fruit]
        setCart(newCart);
    }
    //Choose one for me button function
    const chooseOne =(cartItme) =>{
        console.log(cartItme)
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          const rndInt = randomIntFromInterval(0, cartItme.length-1)
        const cartNum = cartItme[rndInt];
          const newCart = [cartNum]
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
                <Cart cartItme = {cart} chooseOne ={chooseOne}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Fruits;