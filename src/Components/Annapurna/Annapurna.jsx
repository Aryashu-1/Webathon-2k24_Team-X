import React from 'react'
import { NavLink } from 'react-router-dom'


function Annapurna() {
  return (
    <div className='text-white'>
        Annapurna
        <div className='flex flex-row items-center justify-evenly '>
            <NavLink to={'mealsntiffins'}>Meals</NavLink>
            <NavLink to={'genann'}>Chocolates</NavLink>
            <NavLink to={'teatime'}>Tea/Coffee</NavLink>
        </div>
        
    </div>
    
  )
}

export default Annapurna