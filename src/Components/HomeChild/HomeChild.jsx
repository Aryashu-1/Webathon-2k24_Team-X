import React from 'react'
import { NavLink } from 'react-router-dom';

const HomeChild = (props) => {
    return (
    <div className=''>
        <NavLink to={props.data.Title}>
            

            <div className="w-[300px]  shadow-rounded overflow-hidden m-9 border-white border-2 border-solid p-6 rounded-xl shadow-xl shadow-sky-300">
                <div ><img className="w-full object-contain h-40 " src={props.data.img} alt="Your Image" /></div> 
                <div className="px-6 py-4 ">
                <button className="font-bold text-sky-400 text-3xl mb-2 ">{props.data.Title}</button>
                </div>
            </div>  

        </NavLink>
    </div>

      );
}

export default HomeChild