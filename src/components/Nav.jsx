import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="p-4 bg-gray-100">
      {/* <NavLink to="/" className="mr-4">Global View</NavLink> */}
      <NavLink to="/" className="mr-4">Distributor</NavLink>
      <NavLink to="/beneficiary">Beneficiary</NavLink>
    </nav>
  )
}