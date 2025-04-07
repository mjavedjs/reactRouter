import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <ul className='nav' >
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'about'}>About</Link></li>
      <li><Link to={'contant'}>Contant</Link></li>
      <li><Link to={'services'}>Serviecs</Link></li>
    </ul>
  )
}

