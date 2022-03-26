import React from 'react';
import './CartDetails.css'
import { AiOutlineDelete } from 'react-icons/ai';

const CartDetails = ({details}) => {
    const {name, img} = details;
    return (
        <div>
            <div className='details-container'>
                <img src={img} alt="" />
                <h6>{name}</h6>
            <AiOutlineDelete className='btn-delete'></AiOutlineDelete>
            </div>
            
        </div>
    );
};

export default CartDetails;