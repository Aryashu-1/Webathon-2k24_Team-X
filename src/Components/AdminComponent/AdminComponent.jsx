import React, { useState } from 'react';
import axios from 'axios';

function AdminComponent() {
    const BackURL = 'http://localhost:4000';

    const [query, setQuery] = useState('');
    const [listOfOrders, setListOfOrders] = useState([]);
    const [finalCart, setFinalCart] = useState([]);

    function updateQuery(e) {
        setQuery(e.target.value);
    }

    async function getUndeliveredOrders(e) {
        e.preventDefault();

        let data = JSON.stringify({
            vendor: query,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:4000/api/getAllOrders',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response.data);
                setListOfOrders([...response.data]);
                parsify(); // Call the parsing function here
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function parsify() {
        let tempCart = [];
        listOfOrders.forEach((order) => {
            const parsedCart = JSON.parse(order.cart);
            tempCart = [...tempCart, ...parsedCart];
        });
        setFinalCart(tempCart);
    }


    return (
        <div className='w-full h-[60vh] justify-center flex'>
            <form action='' onSubmit={getUndeliveredOrders}>
                <label htmlFor='vendorname'></label>
                <input
                    type='text'
                    id='vendorname'
                    onChange={updateQuery}
                    className='rounded-full p-4'
                    placeholder='enter your vendor key ..'
                />
                <button type='submit' className='bg-sky-400 mx-4 rounded-full p-4'>
                    Get Undelivered Orders
                </button>
            </form>

            <ul className='text-white'>
                {finalCart.map((data,index)=> {data.count>0  && (<li key={index}>{data.productName}---{data.count}</li>)})}
            </ul>

        </div>
    );
}

export default AdminComponent;
