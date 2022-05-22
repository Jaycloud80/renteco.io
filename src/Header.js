import React from 'react';
import './Header.css';
import logo from './logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';


import {
    Link,
} from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} className="header__icon" alt="logo" />
            </Link>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className='header__right'>
         
                 {/* <ConnectButton /> */}
                {/* <LanguageIcon />*/}
                <ExpandMoreIcon /> 
                <Avatar />


            </div>
        </div>



    )
}

export default Header
