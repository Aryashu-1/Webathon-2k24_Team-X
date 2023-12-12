import React from 'react'
import { NavLink } from 'react-router-dom'

function Mba() {
  return (
    <div className='text-white m-6 flex flex-row item-center'>
                  <NavLink to={'juicemba'}><button className='bg-blue-500'>JuiceMba</button></NavLink>
            <NavLink to={'fastfoodmba'}><button className='bg-blue-500'>FAstfoodmba</button></NavLink>
            <NavLink to={'genmba'}><button className='bg-blue-500'>genmba</button></NavLink>
            <NavLink to={'juicemba'}><button className='bg-blue-500'>juicemba</button></NavLink>
            <NavLink to={'iceparlourmba'}><button className='bg-blue-500'>Iceparlourmba</button></NavLink>
    </div>
  )
}

export default Mba