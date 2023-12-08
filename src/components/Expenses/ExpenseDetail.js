

export const ExpenseDetail = (props) => {
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
    </>
  )
}

export default ExpenseDetail;
