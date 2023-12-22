// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Order from '../Order/Order';


const Shop = () => {
   const [products, setProducts] = useState([]);
   useEffect( () =>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
   } ,[])

   return (
      <div className='shop-container'>
            <div className='products-container'>
               {
                  products.map(product => <Products product ={product} key={product.id}></Products> )
               }
            </div>

            <div className='cart-container'>
              <Order></Order>
            </div>   
      </div>
   );
};

export default Shop;