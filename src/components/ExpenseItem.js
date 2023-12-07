import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate= new Date(2023,12,7);
  const expenseTitle="car insurance";
  const expenseAmount=267
  const LocationOfExpenditure="London"
  return (
    <>
    <div className='expense-item'>
      <div >
          {props.date.toISOString()}
      </div>
      <div className='location-of-expenditure'>
          {props.LocationOfExpenditure}
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price '>
        ${props.amount}
      </div>
    </div>

    </>
    
  )
}
export default ExpenseItem
