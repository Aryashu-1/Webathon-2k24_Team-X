import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Dish from '../Dish/Dish';
import PaymentComponent from '../PaymentComponent/PaymentComponent';
import Cart from '../Cart/Cart';

function CocoCola() {
  let [cart,setBill] = useState([])
    let [isCartVisible,setCartVisible]=useState(false)
    let [finalbill,setFinalBill]=useState(0);

    function calculateBill(){
      let totalBill = 0;
      dishes.map((data,index)=>{
        totalBill+=data.bill
      })
      setFinalBill(totalBill)
    
    }

  const [dishes,setCart] =useState( [
    { 
      "productName": "Manchuria",
      "url": 'https://www.awesomecuisine.com/wp-content/uploads/2018/07/cabbage_manchurian_dry.jpg',
      "price":50 ,
      "stock": 100,
      "count": 0,
      "bill":0
    },
    {
      "productName": " Veg Noodles",
      "url":"https://i1.wp.com/thetwincookingproject.net/wp-content/uploads/2020/05/Hakka-Noodles-11-scaled.jpg?fit=1707%2C2560&ssl=1 ",
      "price": 35,
      "stock": 100,
      "count": 0,
      "bill":0
    },
    {
      "productName": "Egg Noodles",
      "url": "https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900",
      "price":40,
      "stock": 100,
      "count": 0,
      "bill":0
    },
    {
      "productName": "Double Egg Noodles",
      "url": "https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900",
      "price": 45,
      "stock": 100,
      "count": 0,
      "bill":0
    },
    {
      "productName": "Fried Rice",
      "url": "https://www.averiecooks.com/wp-content/uploads/2022/05/beeffriedrice-13-540x720.jpg",
      "price": 40,
      "stock": 100,
      "count": 0,
      "bill":0
    },
    {
      "productName": "Double Egg Fried Rice",
      "url": "https://www.averiecooks.com/wp-content/uploads/2022/05/beeffriedrice-13-540x720.jpg",
      "price": 45,
      "stock": 100,
      "count": 0,
      "bill":0,
    },
    {
      "productName": "French Fries",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedlwcMtg6q95pdawXytV7UMbs8WF5Bn4ZeQ&usqp=CAU",
      "stock": 100,
      "price": 25,
      "count": 0,
      "bill":0
    },
    {
      "productName": "PeriPeri Fries ",
      "url": "https://rppizzeria.com/web/image/product.template/121/image_1024?unique=0b2ae4a",
      "price": 30,
      "stock": 100,
      "count": 0,
      "bill":0
    },
    {
      "productName": "KitKat",
      "url": "https://kumaribasket.com/wp-content/uploads/2020/10/Nestle-Kitkat-Chocolate1.jpg",
      "price": 25,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "MunchMax",
      "url": "https://static.wixstatic.com/media/057d74_b1eaf4b1fd8d4648a1abc96ff0edc024~mv2.jpeg/v1/fill/w_480,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/057d74_b1eaf4b1fd8d4648a1abc96ff0edc024~mv2.jpeg",
      "price": 30,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Milkybar",
      "url": "https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2020-07-31/Nestle_Milkybar_25gm.jpg",
      "price": 20,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Perk",
      "url": "https://5.imimg.com/data5/JT/KY/MY-36741304/perk-chocolate.jpg",
      "price": 15,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Bounty",
      "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61hjQuBjRoL.jpg",
      "price": 30,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Mars",
      "url": "https://fetchnbuy.in/cdn/shop/products/MARS_Chocolate_Bar_42gr-700x700_grande.webp?v=1646032438",
      "price": 25,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Cococola",
      "url": "",
      "price": 20,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Pepsi",
      "url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/images/products/sliding_image/283a.jpg?ts=1689327540",
      "price": 15,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Milkshake",
      "url": "https://5.imimg.com/data5/HE/DC/MY-6849189/milkshake.jpg",
      "price": 25,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Sprite",
      "url": "https://m.media-amazon.com/images/I/61slsTqQruL.jpg",
      "price": 10,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Fanta",
      "url": "https://www.grocebox.in/wp-content/uploads/2023/01/Fanta-Orange-Flavoured-Soft-Drink-2L.jpg",
      "price": 30,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Ice Cream",
      "url": "https://qph.cf2.quoracdn.net/main-qimg-1b2d16ee5f2118d3d85675dea618fe3e.webp",
      "price": 35,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Kulfi",
      "url": "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Kesar_Pista_Kulfi_Recipe_Indian_Ice_Cream-1-2_400.jpg",
      "price": 30,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Cassata",
      "url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/519996a.jpg",
      "price": 25,
      "stock": 100,
      "count":0,
      "bill":0
    },
    {
      "productName": "Badam Milk",
      "url": "https://www.bigbasket.com/media/uploads/p/l/20003886_4-godrej-jersey-flavoured-milk-badam.jpg",
      "price": 15,
      "stock": 100,
      "count":0,
      "bill":0
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
      <h1 className='text-6xl font-bold'>Coco-Cola</h1>
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

export default CocoCola