import React from 'react'
import { useState } from 'react';
import Dish from '../Dish/Dish';
import Dishhotel from '../Dish/Dishhotel';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { BillContext } from '../../contexts/bill';
function Hotels() {
   
    let [cart,setBill] = useState([])
    let [isCartVisible,setCartVisible]=useState(false)
    let [finalbill,setFinalBill]=useContext(BillContext);

    function calculateBill(){
      let totalBill = 0;
      dishes.map((data,index)=>{
        totalBill+=data.bill
      })
      setFinalBill(totalBill)
    
    }
    

  const [dishes,setCart] =useState( 
    // { 
    //   "productName": "Indigo",
    //   "vehicleNumber": "9W 1234",
    //   "url": "https://static.toiimg.com/thumb/msid-92781252,width-1280,height-720,resizemode-4/92781252.jpg",
    //   "price": 3000,
    //   "stock": 100,
    //   "count":0,
    //   "departureTime": "13:45 IST",
    //   "timeOfTravel": "6h",
    //   "bill":0
    // },
    // {
    //   "productName": "SpiceJet",
    //   "vehicleNumber": "6E 6969",
    //   "url": "https://www.livemint.com/lm-img/img/2023/09/15/1600x900/SPICEJET-RESULTS--0_1692861718098_1694752429496.JPG",
    //   "price": 4500,
    //   "stock": 100,
    //   "departureTime": "10:00 IST",
    //   "timeOfTravel": "3h",
    //   "count":0,
    //   "bill":0
    // },
    // {
    //   "productName": "AirIndia",
    //   "vehicleNumber": "5T 9876",
    //   "url": "https://images.moneycontrol.com/static-mcnews/2023/08/1-Air-India-rebranding-.jpg?impolicy=website&width=1600&height=900",
    //   "price": 5000,
    //   "stock": 100,
    //   "count":0,
    //   "departureTime": "08:00 IST",
    //   "timeOfTravel": "2h",
    //   "bill":0
    // },
  
    // {
    //   "productName": "Emirates",
    //   "vehicleNumber": "7F 4532",
    //   "url": "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/11/image4-7-1440x864.png",
    //   "price": 2500,
    //   "stock": 100,
    //   "count":0,
    //   "bill":0,
    //   "departureTime": "12:00 IST",
    //   "timeOfTravel": "5h",
    // },

    // {  "productName": "Akasa",
    // "vehicleNumber": "2F 1433",
    //   "url": "https://m.economictimes.com/thumb/msid-108713884,width-1200,height-900,resizemode-4,imgsize-79960/akasa-air.jpg",
    //   "price": 1500,
    //   "stock": 100,
    //   "departureTime": "23:55 AM",
    //   "timeOfTravel": "6h",
    //   "count":0,
    //   "bill":0
    // },
    [
        {
          "productName": "W Goa",
          "url":"https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
          "destination": "Delhi",
          "price": 3000,
          "isFull": true,
          "starRating": 5,
          "description": "Stylish beachfront resort known for its vibrant ambiance and luxurious amenities.",
          "latitude": 15.4909,
          "count":0,
       "bill":0,
          "longitude": 73.8278
        },
        {
          "productName": "Alila Diwa Goa",
          "url":"https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
          "destination": "Delhi",
          "price": 2000,
          "isFull": false,
          "count":0,
       "bill":0,
          "starRating": 2,
          "description": "Tranquil resort offering serene accommodations and personalized service.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "productName": "The Zuri White Sands",
          "destination": "Delhi",
          "url":"https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donald-tong-189296.jpg&fm=jpg",
          "price": 1500,
          "isFull": true,
          "starRating": 1,
          "count":0,
       "bill":0,
          "description": "Beachfront resort offering comfortable accommodations and lively entertainment.",
          "latitude": 15.4909,
          "longitude": 73.8278
        },
        {
          "productName": "Taj Falaknuma Palace",
          "destination": "Delhi",
          "url":"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
          "price": 6000,
          "isFull": false,
          "starRating": 4,
          "count":0,
       "bill":0,
          "description": "Palatial hotel known for its grand architecture and luxurious amenities.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        {
          "productName": "ITC Kohenur",
          "destination": "Delhi",
          "url":"https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donald-tong-189296.jpg&fm=jpg",
          "price": 5500,
          "isFull": false,
          "starRating": 3,
          "count":0,
       "bill":0,
          "description": "Luxury hotel offering a blend of modern comforts and traditional hospitality.",
          "latitude": 17.385,
          "longitude": 78.4867
        },
        
        
      ]
   



  )


  function incrementDishCount(index){

    const testCart = [...dishes]
    if(testCart[index].count>=0)
    testCart[index].count+=1
    testCart[index].bill += testCart[index].price
   if( testCart[index].cart===0)
    testCart[index].cart=1;
    setCart(testCart)
    calculateBill()
  }
  function decrementDishCount(index){

    const testCart = [...dishes]
    if(testCart[index].count>0)
    testCart[index].count-=1
    testCart[index].bill -= testCart[index].price
    setCart(testCart)
    calculateBill()
  }



 // Handler for showing the cart
 const showCart = () => {
  setCartVisible(true);
};

// Handler for hiding the cart
const hideCart = () => {
  setCartVisible(false);
};
{console.log(finalbill)}
  return (
    <div className='text-white text-center'>

<h1 className='text-6xl font-bold'>Available Hotels</h1>

      <div className=' justify-end flex p-2 px-20'>
          <div className="  text-white">    
           <button 
            onClick={showCart}
           className='bg-gradient-to-r from-red-600 to-yellow-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold p-6  active:scale-95 flex items-center justify-center fixed right-9 px-5 py-3 text-xl rounded-full bottom-9 bg-[#cb202d]'  >
              <img src='https://svgsilh.com/svg/294547.svg' className='w-10'></img>
              <h1>CART</h1>
            </button>
            
          </div>
      
      </div>
      
        <div>
          
          <div className='flex flex-row justify-evenly flex-wrap'>
            {dishes.map((data,index) => <Dishhotel key={index} index={index} data={data} increment={incrementDishCount} decrement={decrementDishCount}/>)}
          </div>
          
      <div>
        <NavLink to={'/Hotels'}><button className='bg-sky-600 p-3 m-4 text-white rounded-lg'>Next</button></NavLink>
      </div>
          
        </div>
       


        
        {isCartVisible && <Cart dishes={dishes} totalAmount={finalbill} onHideCart={hideCart} />}
      </div>
   
  )
}

export default Hotels