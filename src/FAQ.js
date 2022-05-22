
import './FAQ.css';
// import Button from '@mui/material/Button';
// import SearchResult from "./SearchResult";
import Banner from './Banner.js'
import React from 'react'
import CustomizedAccordions from './CustomizedAccordions.js'

function FAQ() {
    return (
        <div className='FAQ__wrapper'>
            <Banner
                heading='FAQ' />
            <div class="FAQ__body">
                <CustomizedAccordions />
            </div>
        </div>
    )
}

export default FAQ