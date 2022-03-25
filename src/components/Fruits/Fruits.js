import React, { useEffect, useState } from 'react';
import FruitCart from '../FruitCart/FruitCart';
import './Fruits.css'

const Fruits = () => {

    const [fruits, setFruits] = useState([])
console.log(fruits);
    useEffect(()=>{
        fetch('fruitDB.json')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])
    return (
        <div>
            <h1>This is fruits section</h1>
            <div className='col-md-8'>
                <div className='row g-4'>
                {
                    fruits.map((fruit)=> <FruitCart key = {fruit.id} fruit = {fruit}></FruitCart>)
                }
                </div>
            </div>
        </div>
    );
};

export default Fruits;