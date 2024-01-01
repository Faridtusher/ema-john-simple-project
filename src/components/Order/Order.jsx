// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Order.css'

const Order = (props) => {
   // eslint-disable-next-line react/prop-types
   const {cart} =props;
   console.log(cart);
   let total = 0;
   let TotalShipping = 0;
   let TotalTax = 0;
   for(const product of cart){
      total = total + product.price;
      TotalShipping = TotalShipping + product.shipping;
      TotalTax = TotalTax + (product.price*5 /100);
   }
   let grandTotal = total+TotalShipping+TotalTax;
   

   
   
   // eslint-disable-next-line react/prop-types
   return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className='order-container'>
         <h3>Order summary</h3>
         <p>Selected items :{}</p>
         <p>Total Price : $ {total}</p>
         <p>Total Shipping Charge : {TotalShipping}</p>
         <p>Tax:{TotalTax}</p>
         <h4>Grand Total : {grandTotal}</h4>
         <button>Clear Cart</button><br></br>
         <button>Review Order</button>
      </div>
   );
};

export default Order;