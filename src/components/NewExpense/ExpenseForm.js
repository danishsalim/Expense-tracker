import React, {useState} from 'react'
import "./ExpenseForm.css"
const ExpenseForm = () => {

    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
            }
        console.log(expenseData)
    }
  return (
    <div>
            <form  onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label >Title</label>
                        <input type='text' onChange={titleChangeHandler} className='title'/>
                    </div>
                    <div className='new-expense__control'>
                        <label >Amount</label>
                        <input type='number' onChange={amountChangeHandler} className='amount' min='0.01' step='0.01'/>
                    </div>
                    <div className='new-expense__control'>
                        <label >date</label>
                        <input type='date' onChange={dateChangeHandler} className='date' min='2019-01-01' max='2023-12-31'/>
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