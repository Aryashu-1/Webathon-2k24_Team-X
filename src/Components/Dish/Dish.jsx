import React from "react";

function Dish(props) {


  return (
    <div className="border-2 m-6 rounded-xl border-white p-3">
      <div className="w-[300px] rounded overflow-hidden shadow-lg">
        <div>
          <img
            className="w-full object-cover h-48"
            src={props.data.url}
            alt="Your Image"
          />
        </div>
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2 ">{props.data.productName}</div>
          <p className="text-white truncate ">Departure Time : {props.data.departureTime}</p>
          <p className="text-white truncate ">Time of Travel : {props.data.timeOfTravel}</p>
          <p className="text-white truncate ">Price : Rs.{props.data.price}</p>
        </div>
        <div className="flex gap-3 flex-row items-center justify-center">
            <button className="bg-sky-400  font-bold px-6 py-3 rounded-full" onClick={()=>props.decrement(props.index)}>
                -
            </button>
            <span className="font-bold">
                {props.data.count}
            </span>
            <button className="bg-sky-400 px-6 py-3 rounded-full " onClick={()=>props.increment(props.index)}>
                +
            </button>
        </div>
      </div>
    </div>
  );
}

export default Dish;
