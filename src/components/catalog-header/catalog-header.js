import React from 'react';
import { Link } from 'react-router-dom'
import DropdownMenu from '../dropdown-menu'

import './catalog-header.scss'

const Header = () => {
  return (
    <header className="header">
      <DropdownMenu />
      <span>Some header over here</span>

      <Link to="/">Home</Link>
      <Link to="/cartpage">Cart page</Link>
    </header>
  )
};

export default Header