import React, { useEffect, useState } from 'react';
import Card from '../../../Card';
import Random from '../../../Random/Random';
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
                <div>
                    <h3>Product Information</h3> 
                { cart.map((item) => (
                        
                    <div key={item.id} className="item-img">
                        <img src={item.image} alt="" />
                            <div >{item.name}</div>
                        </div>
                        
                    ))
                }
                <button className="info-btn">Choose</button>
                </div>
               
              
            </div>


            </div>
        </div>
    );
};

export default Shop;
