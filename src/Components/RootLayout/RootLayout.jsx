import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function RootLayout() {
  return (
    <div className='relative bg-slate-900 w-full'>
        <Navbar/>
        <Outlet />

    </div>
  )
}

export default RootLayout