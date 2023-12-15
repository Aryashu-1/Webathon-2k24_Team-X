import React from 'react';
import PaymentComponent from '../PaymentComponent/PaymentComponent';

function Cart({ dishes, onHideCart, totalAmount }) {
  return (<div>
    
    <div className='bg-white text-black p-4 absolute top-0 right-0 bottom-0 left-0'>
      <h2 className='text-6xl font-bold mb-4'>Cart</h2>
      <table className='w-full border-2 border-black'>
        <thead>
          <tr className='flex border-2 border-black flex-row text-center justify-evenly'>
            <th className='text-2xl justify-start font-bold '>Product Name</th>
            <th className='text-2xl justify-start font-bold'>Quantity</th>
            <th className='text-2xl justify-start font-bold'>Amount</th>
          </tr>
        </thead>
        <tbody>
        {dishes.map((dish, index) => {
  return dish.count > 0 ? (
    <div key={index}>
      <tr className='flex border-2 border-black flex-row text-center justify-evenly'>
        <td className='text-2xl justify-start flex mx-9 w-80'>{dish.productName}</td>
        <td className='text-2xl justify-start flex mx-9'>{dish.count}</td>
        <td className='text-2xl justify-start flex mx-9'>{dish.bill}</td>
      </tr>
    </div>
  ) : null;
})}

        </tbody>
      </table>
      <button className='bg-gray-700 text-white rounded-full p-2 mt-4' onClick={onHideCart}>
        Hide Cart
      </button>
     <span className='fixed right-16 bottom-9 text-black'>{totalAmount}</span>
    </div>
    <PaymentComponent userKey={'ANN'} data={totalAmount} cart={JSON.stringify(dishes)}/>
    </div>
  );
}

export default Cart;
