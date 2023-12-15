import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function ConfirmDelivery() {

    let [orderId,setOrderId] = useState('')
    let [showMessage,setShowMessage] = useState(false)

    function updateorderId(e){
        setOrderId(e.target.value)
    }

    async function handleSubmit(){
        const result = await axios.post("http://localhost:4000/api/confirm-order-delivery",{
            "orderId": orderId
        })
        setShowMessage(true)
    }   

  return (
    <div className='w-full h-screen bg-slate-800 flex justify-center text-white'>

        <h1 className='text-center text-2xl font-extrabold'>Delivery Verificator</h1>

        <form action="" className='mt-56' onSubmit={handleSubmit}>
            <label htmlFor="" className='text-xl text-white'>Order ID: </label>
            <input type="text" id="orderId" className='p-3 text-black' onChange={updateorderId}/>
            <button type='submit' className='bg-sky-400 mx-4 p-3 rounded-lg'>Submit</button>
        </form>

        {showMessage && (<h1>Delivery of the cart is cnfirmed &#9986;</h1>)}

    </div>
  )
}

export default ConfirmDelivery