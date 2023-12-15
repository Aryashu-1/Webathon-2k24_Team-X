import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
import { redirect } from 'react-router-dom';


function PaymentComponent(props) {
  const BackURL = "http://localhost:4000"

  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orders, setOrders] = useState([]);
  let [paymentURL,setpaymentURL] = useState('')

  /* async function fetchOrders() {
    const { data } = await axios.get('/list-orders');
    setOrders(data);
  }
  useEffect(() => {
    fetchOrders();
  }, []); */

  function loadRazorpay() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post(`${BackURL}/api/order`, {
          amount: props.data.toString() + '00',
        });

        console.log(result)

        const { amount, id: order_id, currency } = result.data;
        console.log(order_id)
        const {
          data: { key: razorpayKey },
        } = await axios.get(`${BackURL}/api/get-visible-key`);


        const options = {
          key: razorpayKey,
          amount: amount,
          currency: currency,
          name: 'example name',
          description: 'example transaction',
          order_id: order_id,
          handler: async function(response){
            
            console.log(response)

            const result = await axios.post(`${BackURL}/api/pay-order`, {
              amount: amount,
              vendor: props.userKey,
              cart: props.cart,
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });
            console.log(result);
            /* fetchOrders(); */
            setpaymentURL(`https://quickchart.io/qr?text=${result.data.obj._id}`)

          },
          prefill: {
            name: 'example name',
            email: 'email@example.com',
            contact: '9866393725',
          },
          notes: {
            address: 'example address',
          },
          theme: {
            color: '#80c0f0',
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }

  return (
    <div className="border-2 border-black text-white">
      <button
        className='active:bg-green-500 active:scale-95 flex items-center justify-center fixed right-6 px-5 py-3 text-xl rounded-full bottom-9 bg-[#cb202d] '
        disabled={loading}
        onClick={loadRazorpay}
      >
        <img src='https://upload.wikimedia.org/wikipedia/commons/8/82/Ei-lock.svg' className='w-10'></img>
        <h1>PAY &#8377; {props.data}</h1>
      </button>
      
      {paymentURL && (
        <a href={paymentURL} target="_blank" className='fixed left-4 bottom-4 text-black'>
          Click this to get QR
        </a>
      )}
    </div>
  );
}

export default PaymentComponent