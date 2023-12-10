import {expenses} from '../../App'
import './ExpenseDetail.css'
 const ExpenseDetail = (props) => {
    const clickHandler=()=>{
        console.log("clicked")
    }
    const deleteHandler=(e,idx)=>{
        // console.log("del "+idx)
        // console.log(e.target.parentElement)
        e.target.parentElement.classList.add('hide')
    }
  return (
    <>
        <div className='location-of-expenditure'>
            {props.LocationOfExpenditure}
        </div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price '>
            ${props.amount}
        </div>
        <button onClick={clickHandler}>change title</button>
        <button onClick={(e)=>deleteHandler(e,props.id)}>Delete</button>
    </>
  )
}

export default ExpenseDetail;
