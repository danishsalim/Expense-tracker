import { useState } from 'react'
import {expenses} from '../../App'
import './ExpenseDetail.css'
 const ExpenseDetail = (props) => {
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    const clickHandler=()=>{
        console.log("clicked")
        setTitle("updated")
    }
    const deleteHandler=(e,idx)=>{
        // console.log("del "+idx)
        // console.log(e.target.parentElement)
        e.target.parentElement.classList.add('hide')
    }
    const changeAmountHandler =()=>
    {
        setAmount('100$')
    }
  return (
    <>
        <div className='location-of-expenditure'>
            {props.LocationOfExpenditure}
        </div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price '>
            ${amount}
        </div>
        <button onClick={clickHandler}>change title</button>
        <button onClick={changeAmountHandler}>change price to 100$</button>
        <button onClick={(e)=>deleteHandler(e,props.id)}>Delete</button>
    </>
  )
}

export default ExpenseDetail;
