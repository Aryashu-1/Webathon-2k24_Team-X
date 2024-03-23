import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Dish from '../Dish/Dish'
import { useState } from 'react'
import PaymentComponent from '../PaymentComponent/PaymentComponent'
import Cart from '../Cart/Cart'
import { BillContext } from '../../contexts/bill'


  function Annapurna() {
    
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
    

  const [dishes,setCart] =useState( [
    { 
      "productName": "Indigo",
      "vehicleNumber": "9W 1234",
      "url": "https://static.toiimg.com/thumb/msid-92781252,width-1280,height-720,resizemode-4/92781252.jpg",
      "price": 3000,
      "stock": 100,
      "count":0,
      "departureTime": "13:45 IST",
      "timeOfTravel": "6h",
      "bill":0
    },
    {
      "productName": "SpiceJet",
      "vehicleNumber": "6E 6969",
      "url": "https://www.livemint.com/lm-img/img/2023/09/15/1600x900/SPICEJET-RESULTS--0_1692861718098_1694752429496.JPG",
      "price": 4500,
      "stock": 100,
      "departureTime": "10:00 IST",
      "timeOfTravel": "3h",
      "count":0,
      "bill":0
    },
    {
      "productName": "AirIndia",
      "vehicleNumber": "5T 9876",
      "url": "https://images.moneycontrol.com/static-mcnews/2023/08/1-Air-India-rebranding-.jpg?impolicy=website&width=1600&height=900",
      "price": 5000,
      "stock": 100,
      "count":0,
      "departureTime": "08:00 IST",
      "timeOfTravel": "2h",
      "bill":0
    },
  
    {
      "productName": "Emirates",
      "vehicleNumber": "7F 4532",
      "url": "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/11/image4-7-1440x864.png",
      "price": 2500,
      "stock": 100,
      "count":0,
      "bill":0,
      "departureTime": "12:00 IST",
      "timeOfTravel": "5h",
    },

    {  "productName": "Akasa",
    "vehicleNumber": "2F 1433",
      "url": "https://m.economictimes.com/thumb/msid-108713884,width-1200,height-900,resizemode-4,imgsize-79960/akasa-air.jpg",
      "price": 1500,
      "stock": 100,
      "departureTime": "23:55 AM",
      "timeOfTravel": "6h",
      "count":0,
      "bill":0
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

<h1 className='text-6xl font-bold'>Available Flights</h1>

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
            {dishes.map((data,index) => <Dish key={index} index={index} data={data} increment={incrementDishCount} decrement={decrementDishCount}/>)}
          </div>
          
      <div>
        <NavLink to={'/Hotels'}><button className='bg-sky-600 p-3 m-4 text-white rounded-lg'>Next</button></NavLink>
      </div>
          
        </div>
       


        
        {isCartVisible && <Cart dishes={dishes} totalAmount={finalbill} onHideCart={hideCart} />}
      </div>
   
  )
}

export default Annapurna