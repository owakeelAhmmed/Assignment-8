import React from 'react';
import './Card.css';
import {BsFillCartCheckFill} from 'react-icons/bs';


const Card = ({data, handleAddToCart}) => {
    const {name, image, price} = data;

   
    
    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button onClick={() => handleAddToCart(data)} className="button"> 
            <p>Add To Cart</p>  
            <BsFillCartCheckFill className='icon'/>  
            </button>
        </div>
    );
};

export default Card;