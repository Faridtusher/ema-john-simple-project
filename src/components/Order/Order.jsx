// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Order.css'

const Order = () => {
   // eslint-disable-next-line react/prop-types
   return (
      <div>
         <h3>Order summary</h3>
         <p>Select Items:{}</p>
         <p>Total Price : {}</p>
         <p>Total Shipping Charge : {}</p>
         <p>Tax:{}</p>
         <h4>Grand Total : {}</h4>
         <button>Clear Cart</button><br></br>
         <button>Review Order</button>
      </div>
   );
};

export default Order;