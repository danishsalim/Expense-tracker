import React from 'react'
import "./ExpenseForm.css"
const ExpenseForm = () => {
    const titleChangeHandler = (e) =>{
        console.log(e.target.value)
    }
  return (
    <div>
            <form >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label >Title</label>
                        <input type='text' onChange={titleChangeHandler} className='title'/>
                    </div>
                    <div className='new-expense__control'>
                        <label >Amount</label>
                        <input type='number' name='amount' className='amount' min='0.01' step='0.01'/>
                    </div>
                    <div className='new-expense__control'>
                        <label >date</label>
                        <input type='date' name='date' className='date' min='2019-01-01' max='2023-12-31'/>
                    </div>
                </div>
            <div className='new-expense__actions'>
                <button type='submit'>submit</button>
            </div>    
        </form>
    </div>
  );
};

export default ExpenseForm