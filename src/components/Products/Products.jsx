// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Products.css'

const Products = (props) => {
   // eslint-disable-next-line react/prop-types
   const {seller, name, img, price, ratings} = props.product;
   // eslint-disable-next-line react/prop-types
   console.log(props.product)
   return (
      <div className='myProduct'>
            <img src= {img} alt="Image not found!!" />
            <div className='product-details'>
               <h3 className='product-name'>{name}</h3>
               <h4>Price : {price}</h4>
               <p>Manufacturer : {seller}</p>
               <p>Rating: {ratings} star</p> 
            </div> 
            <button className='cart-btn'>Add to card</button>
      </div>
   );
};

export default Products;