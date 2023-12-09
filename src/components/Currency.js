import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import '../currency.css'

const Currency = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [chosenCurrency, setChosenCurrency] = useState('£')
    const {currency} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);

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
    const handleCurrencyChange = (symbol) => {
        console.log('symbol:', symbol)
        setChosenCurrency(symbol)
        dispatch ({
            type: 'CHG_CURRENCY', payload: symbol,
        });
        setDropdownOpen(false)
    }

    const handleCurrencyDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }
    return (<div className='select-container'>
        <div onClick={handleCurrencyDropdown} className='alert currency-select'>
            Currency: ({currency} {handleCurrencyName(currency)})
        </div>
        {dropdownOpen ? <div className='currency-dropdown'>
            <div className='currency-option' onClick={()=>handleCurrencyChange('$')}>$ Dollar</div>
            <div className='currency-option' onClick={()=>handleCurrencyChange('£')}>£ Pound</div>
            <div className='currency-option' onClick={()=>handleCurrencyChange('€')}>€ Euro</div>
            <div className='currency-option' onClick={()=>handleCurrencyChange('₹')}>₹ Ruppee</div>
        </div> : ''}
    </div>);
};
export default Currency;