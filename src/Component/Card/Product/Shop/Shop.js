import React, { useEffect, useState } from 'react';
import Card from '../../../Card';
import Navbar from './Navbar/Navbar';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);


    const handleAddToCart = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    };


    useEffect(() =>{
        fetch('data.json')
        .then(Response => Response.json())
        .then(data => setProduct(data))
    },[])

    
    return (
        <div>
            <Navbar/>
            
            <div className="shop-container">
            <div className="product-container">

            {products.map((product) => 
                <div key={product.id}> 
                  <Card data={product} handleAddToCart = {handleAddToCart}/>  
                </div>)
            }
            </div>


            <div className="item-container">
                { cart.map((item) => (
                        <h3 key={item.id}>Name: {item.name}</h3>
                    ))
                }
                <button className="button">Choose One</button>
            </div>


            </div>
        </div>
    );
};

export default Shop;
