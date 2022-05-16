import React from 'react';
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
const Navbar = () => {
  return (
    <div className='Navbar-main'>
            <div className='search-wrapper marg'><input type='search' placeholder='Search...'/></div>
            <div className='marg'><IconButton><ShoppingCartIcon/></IconButton></div>
            <div className='marg'><a href='#'>Contact US</a></div>
            <div className='marg'><a  href='#'><b>Login / SignUp</b></a></div>
    </div>
  )
}

export default Navbar;