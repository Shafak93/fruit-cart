import React from 'react';
import './CartDetails.css'
import { AiOutlineDelete } from 'react-icons/ai';

const CartDetails = ({details}) => {
    return (
        <div>
            <div className='details-container'>
                <img src={details.img} alt="" />
                <h6>{details.name}</h6>
            <AiOutlineDelete className='btn-delete'></AiOutlineDelete>
            </div>
            
        </div>
    );
};

export default CartDetails;