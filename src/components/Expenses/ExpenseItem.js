import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import  Card from '../UI/Card'

const ExpenseItem = (props) => {
 
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetail id={props.id} amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
    </Card>
  )
}
export default ExpenseItem
