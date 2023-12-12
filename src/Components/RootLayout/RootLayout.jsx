import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function RootLayout() {
  return (
    <div className='h-full w-full flex justify-center items-end '>

        <Outlet />


        <div className='flex flex-row items-center justify-evenly w-full mb-10'>

            <NavLink to={'/annapurna'}><button className='bg-blue-500'>Annapurna</button></NavLink>
            <NavLink to={'/cococola'}><button className='bg-blue-500'>Coco Cola</button></NavLink>
            <NavLink to={'/mba'}><button className='bg-blue-500'>MBA</button></NavLink>


        </div>

    </div>
  )
}

export default RootLayout