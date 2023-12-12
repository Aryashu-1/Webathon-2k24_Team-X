import React from 'react'
import { NavLink } from 'react-router-dom'

function CocoCola() {
  return (
    <div className='text-white'>
                <NavLink to={'fastfood'}><button className='bg-blue-500'>Fastfood</button></NavLink>
            <NavLink to={'juicecola'}><button className='bg-blue-500'>JuiceCola</button></NavLink>
            <NavLink to={'gencola'}><button className='bg-blue-500'>Gencola</button></NavLink>
    </div>
  )
}

export default CocoCola