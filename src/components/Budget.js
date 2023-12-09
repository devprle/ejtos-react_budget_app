import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {currency} = useContext(AppContext);

    const {budget} = useContext(AppContext);
    const {remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        if (event.target.value > 20000) {
        } else {
            alert('The value can not exceed 20000')
            if (event.target.value < budget - remaining) {
                alert('You can not reduce the budget value lower than the spending')
            } else {
                setNewBudget(event.target.value);
            }
        }
    }
    return (<div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>);
};
export default Budget;