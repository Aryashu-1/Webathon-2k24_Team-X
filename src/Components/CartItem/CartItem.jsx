import React from 'react'

function CartItem(props) {
  return (
    <div className='text-white'>
        <h1>{props.data.name}</h1>
        <h1>{props.data.Qty}</h1>
        <h1>{props.data.Amt}</h1>
    </div>
  )
}

export default CartItem