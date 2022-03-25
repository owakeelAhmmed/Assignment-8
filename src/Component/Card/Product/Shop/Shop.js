import React, { useEffect, useState } from 'react';
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
            {
                products.map((product) => console.log(product.name))
            }
        </div>
    );
};

export default Shop;