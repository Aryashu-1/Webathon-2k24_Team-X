import React from "react";
import { useState } from "react";
import './d.css'
import DisplayMap from "../DisplayMap/DisplayMap";

function Dishhotel(props) {
    const [showMap, setShowMap] = useState(false);
    console.log(props.data)
    
    const handleTrackVehicle = () => {
    setShowMap(true);
    };
    
    const handleCloseMap = () => {
    setShowMap(false);
    };

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
          <p className="text-white truncate ">Departure Time : {props.data.destination}</p>
          <p className="text-white truncate ">Time of Travel : {props.data.starRating}</p>
          <p className="text-white truncate ">Time of Travel : {props.data.description}</p>
        
          <div className=' p-2'>
            <button className=' m-auto p-4rounded-full underline underline-offset-1' onClick={handleTrackVehicle}>Locate on map</button>
        </div>
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
      {showMap && (
    <div className="modal">
      <div className="modal-content text-center">
        <DisplayMap handleCloseMap={handleCloseMap} center ={[props.lat,props.lng]} />
        <button className='bg-sky-600 m-3 p-4 rounded-lg w-20 text-white' onClick={handleCloseMap}>Close</button>
      </div>
    </div>
  )}
    </div>

  );
}

export default Dishhotel;
