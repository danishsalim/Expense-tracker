import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import  Card from '../UI/Card'

const ExpenseItem = (props) => {
 
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetail  amount={props.amount}   title={props.title} />
    </Card>
  )
}
export default ExpenseItem
