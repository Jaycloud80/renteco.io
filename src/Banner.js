import React, { useState } from 'react'
import './Banner.css'
// import Button from '@mui/material/Button';
import Search from './Search';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from 'web3uikit';

function Banner({
  heading,
  subheading
}) {

  const [showSearch, setShowSearch] = useState(false);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/marketplace");
  }

  return (
    <div className='banner'>
      <div className='banner__info'>
        <div className='search__wrapper'>
          <h1>{heading}</h1>
          <p>
            {subheading}
          </p>
          {/* <div className='search__bar'>
            <input type="text" />
            <SearchIcon style={{ color: 'black' }} />
          </div> 
           <div className='banner__search'>
            {showSearch && <Search />}

            <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
              {showSearch ? "Hide" : "Search Dates"}
            </Button>
          </div> 
        </div>
  {/* <Button onClick={handleClick} variant='outlined'>Explore Nearby</Button>  */}
          <Button
            color="blue"
            icon="chevronRight"
            iconLayout="trailing"
            id="test-button-secondary-icon-after"
            onClick={handleClick}
            size="large"
            text="Launch DApp"
            theme="secondary"
            type="button"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner