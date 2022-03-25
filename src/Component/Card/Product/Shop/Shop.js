import React, { useEffect, useState } from 'react';
import Card from '../../../Card';
import Navbar from './Navbar/Navbar';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(Response => Response.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <Navbar/>
            <div className="product-container">

            {
                products.map((product) => 
                <div key={product.id}> 
                  <Card data={product}/>  
                </div>)
            }
            </div>
        </div>
    );
};

export default Shop;