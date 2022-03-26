import React, { useEffect, useState } from 'react';
import Card from '../../../Card';
import Navbar from './Navbar/Navbar';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);
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
            <div>
                {
                    cart.map((item) => (
                        <h3 key={item.id}>{item.name}</h3>
                    ))
                }
            </div>
            <div className="product-container">

            {
                products.map((product) => 
                <div key={product.id}> 
                  <Card data={product} handleAddToCart = {handleAddToCart}/>  
                </div>)
            }
            </div>
        </div>
    );
};

export default Shop;
