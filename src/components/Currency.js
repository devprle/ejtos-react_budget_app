import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import '../currency.css'

const Currency = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const {currency} = useContext(AppContext);
    //console.log('currency: ', currency)
    const handleCurrencyName = (symbol) => {
        switch (symbol) {
            case '$':
                return 'Dollar';
            case '£':
                return 'Pound';
            case '€' :
                return 'Euro';
            case '₹':
                return 'Ruppee'
        }
    }
    const handleCurrencyDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }
    return (<div className='select-container'>
        <div onClick={handleCurrencyDropdown} className='alert currency-select'>
            Currency: ({currency} {handleCurrencyName(currency)})
        </div>
        {dropdownOpen ? <div className='currency-dropdown'>
            <div className='currency-option'>$ Dollar</div>
            <div className='currency-option'>£ Pound</div>
            <div className='currency-option'>€ Euro</div>
            <div className='currency-option'>₹ Ruppee</div>
        </div> : ''}
    </div>);
};
export default Currency;