import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from "react-date-range"
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

//date picker
function Search() {

    let navigate = useNavigate();
    function handleClick() {
        navigate("/marketplace");
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);

    }
    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={handleClick} variant='outlined'>Search Renteco</Button>
        </div>
    )
}

export default Search