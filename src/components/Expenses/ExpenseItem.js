import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = (props) => {
 
  return (
    <>
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetail amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
    </div>

    </>
    
  )
}
export default ExpenseItem
