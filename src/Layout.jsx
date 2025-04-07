import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './index.css'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/> 
    {/* jo kuch be screen par show kre ga */}
    </>
  )
}

export default Layout