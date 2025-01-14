import React from 'react'
import { NavLink } from 'react-router-dom'
import PaymentComponent from '../PaymentComponent/PaymentComponent'
import Dish from '../Dish/Dish'
import { useState } from 'react'
import Cart from '../Cart/Cart'
function Mba() {
 
    
    let [cart,setBill] = useState([])
    let [isCartVisible,setCartVisible]=useState(false)
    let [finalbill,setFinalBill]=useState(0);

    function calculateBill(){
      let totalBill = 0;
      dishes.map((data,index)=>{
        totalBill+=data.price
      })
      setFinalBill(totalBill)
    
    }

  const [dishes,setCart] =useState( [
    {
      "vehicleNumber": "MH12 AB 3456",
      "name": "Mumbai Train (Fast)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 500,
      "departureTime": "08:00 AM",
      "timeOfTravel": "12h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "9W 1234",
      "name": "Indigo",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 3500,
      "departureTime": "10:30 AM",
      "timeOfTravel": "2h 15m",
      "isFull": true,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "GOA12345",
      "name": "Mumbai Delhi Exp",
      "source": "Mumbai",
      "destination": "Delhi",
      "price": 800,
      "departureTime": "17:00 PM",
      "timeOfTravel": "8h 30m",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "KL10 12345",
      "name": "Kerala State Water Transport Department",
      "source": "Thiruvananthapuram",
      "destination": "Mumbai",
      "price": 150,
      "departureTime": "14:00 PM",
      "timeOfTravel": "2h",
      "isFull": false,
      "typeOfTransport": "ship"
    },
    {
      "vehicleNumber": "KA 01 C 1234",
      "name": "Volvo B9R",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 1200,
      "departureTime": "22:00 PM",
      "timeOfTravel": "10h",
      "isFull": true,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "MH 46 Y 7890",
      "name": "Mahindra Tempo Traveller",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 15,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 1h)",
      "isFull": false,
      "typeOfTransport": "minibus"
    },
    {
      "vehicleNumber": "DL 01 U 1234",
      "name": "Raju Car Services (Sedan)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 22,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 10hrs)",
      "isFull": false,
      "typeOfTransport": "cabs"
    },
    {
      "vehicleNumber": "AP 28 BY 4567",
      "name": "Nexus cabs",
      "source": "Chennai",
      "destination": "Hyderabad",
      "pricePerKM": 20,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 6h)",
      "isFull": false,
      "typeOfTransport": "cabs"
    },
    {
      "vehicleNumber": "TN 07 N 9876",
      "name": "",
      "source": "Chennai",
      "destination": "Mumbai",
      "price": 60,
      "departureTime": "11:00 AM",
      "timeOfTravel": "5h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "HR 26 AB 1234",
      "name": "Shatabdi Express",
      "source": "Chennai",
      "destination": "Delhi",
      "price": 1200,
      "departureTime": "07:30 AM",
      "timeOfTravel": "23h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "GJ 01 G 5678",
      "name": "Ro-Pax Ferry",
      "source": "Mumbai",
      "destination": "Chennai",
      "price": 450,
      "departureTime": "13:00 PM",
      "timeOfTravel": "14h",
      "isFull": false,
      "typeOfTransport": "ship"
    },
    {
      "vehicleNumber": "KL 09 Z 4321",
      "name": "Houseboat (Alleppey Backwaters)",
      "source": "Kochi",
      "destination": "Thiruvananthapuram",
      "price": 3000,
      "departureTime": "5:00 PM",
      "timeOfTravel": "Varies",
      "isFull": false,
      "typeOfTransport": "ship"
    },
    {
      "vehicleNumber": "PB 06 C 9876",
      "name": "Volvo Multi Axle AC Sleeper Coach (Amritsar - Delhi)",
      "source": "Hyderabad",
      "destination": "Tirupati",
      "price": 1500,
      "departureTime": "20:30 PM",
      "timeOfTravel": "8h",
      "isFull": false,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "RJ 14 F 1234",
      "name": "Non-AC Mini Bus",
      "source": "Hyderabad",
      "destination": "Panaji",
      "price": 20,
      "departureTime": "6:00 AM",
      "timeOfTravel": "6h",
      "isFull": false,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "GA 09 U 7890",
      "name": "Force Traveller",
      "source": "Hyderabad",
      "destination": "Panaji",
      "pricePerKM": 18,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 45m)",
      "isFull": false,
      "typeOfTransport": "minibus"
    },
    {
      "vehicleNumber": "MP 04 Z 5678",
      "name": "Uberiman (Micro)",
      "source": "Hyderabad",
      "destination": "Jammu",
      "pricePerKM": 15,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 30h)",
      "isFull": false,
      "typeOfTransport": "cabs"
    },
    {
      "vehicleNumber": "AS 01 Y 3456",
      "name": "Sai Ram Bus Services",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 10,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies",
      "isFull" : false,
      "typeOfTransport": "minibus"
    },
    {
      "vehicleNumber": "Y 3456",
      "name": "Spicejet",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 10000,
      "departureTime": "6:00 AM",
      "timeOfTravel": "2h",
      "isFull" : false,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "Y 3456",
      "name": "Spicejet",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 10000,
      "departureTime": "6:00 AM",
      "timeOfTravel": "2h",
      "isFull": false,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "AP 19 Z 7890",
      "name": "Air India",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 8500,
      "departureTime": "12:00 PM",
      "timeOfTravel": "2h 15m",
      "isFull": true,
      "typeOfTransport": "flight"
    },
    {
      "vehicleNumber": "KA 26 Y 4321",
      "name": "Deccan Express (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 700,
      "departureTime": "18:30 PM",
      "timeOfTravel": "16h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "MH 09 U 1234",
      "name": "Nizamuddin Express (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 950,
      "departureTime": "09:15 AM",
      "timeOfTravel": "14h 30m",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "HR 14 AB 5678",
      "name": "Rajdhani Express (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 1500,
      "departureTime": "23:00 PM",
      "timeOfTravel": "11h",
      "isFull": false,
      "typeOfTransport": "train"
    },
    {
      "vehicleNumber": "TN 04 XY 3456",
      "name": "Volvo Multi Axle AC Sleeper (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "price": 1800,
      "departureTime": "20:00 PM",
      "timeOfTravel": "9h",
      "isFull": true,
      "typeOfTransport": "bus"
    },
    {
      "vehicleNumber": "KL 56 C 9876",
      "name": "RK Travels (Hyderabad - Delhi)",
      "source": "Hyderabad",
      "destination": "Delhi",
      "pricePerKM": 17,
      "departureTime": "On Demand",
      "timeOfTravel": "Varies (Approx. 12h)",
      "isFull": false,
      "typeOfTransport": "bus"
    }       
])

    function incrementDishCount(index){

      const testCart = [...dishes]
      if(testCart[index].count>=0)
      testCart[index].count+=1
      testCart[index].bill += testCart[index].price

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
    <div className='text-white'>
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Coco-Cola</h1>
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
      
    
      <div className='flex flex-row justify-evenly flex-wrap'>
        {dishes.map((data,index) => <Dish key={index} index={index} data={data} increment={incrementDishCount} decrement={decrementDishCount}/>)}
      </div>
      
      </div>
       


        
       {isCartVisible && <Cart dishes={dishes} totalAmount={finalbill} onHideCart={hideCart} />}
     </div>
  )
}

export default Mba