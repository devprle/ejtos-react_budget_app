import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../currency.css'
const Currency = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <>
        <div className='currency-select'>
            Currency
        </div>
        <div className='currency-dropdown'>
            <div>Dollar</div>
            <div>Pound</div>
            <div>Euro</div>
            <div>Ruppee</div>
        </div>
        </> 
    );
};
export default Currency;