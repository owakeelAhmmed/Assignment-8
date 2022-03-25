import React from 'react';
import './Card.css';



const Card = ({data}) => {
    const {name, image, price} = data;
    console.log(name);
    
    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button>Add To Cart</button>
        </div>
    );
};

export default Card;