import React, { useState } from 'react'
import './SearchResult.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Search from './Search';
import Button from '@mui/material/Button';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                    <div className='banner__search'>
                        {showSearch && <Search />}
                        <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                            {showSearch ? "Hide" : "Search Dates"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult