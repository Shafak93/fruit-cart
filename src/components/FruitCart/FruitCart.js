import React from 'react';
import { Card } from 'react-bootstrap';
import './FruitCart.css';

const FruitCart = (props) => {
    const {id,name, img,price,} = props.fruit
    return (
        <div className='col-md-4'>
            <Card className='w-100' >
                <Card.Img className='h-75' src = {img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price:{price} </Card.Text>
                    <button className='btn btn-primary'>Add To Cart</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FruitCart;