import React from 'react'
import { Link } from 'react-router-dom'
import './dropdown-menu.scss'

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <Link to="/">Home</Link>
      <Link to="/cartpage">Cart page</Link>
    </div>
  )
};

export default DropdownMenu