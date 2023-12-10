
 const ExpenseDetail = (props) => {
    const clickHandler=()=>{
        console.log("clicked")
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
    </>
  )
}

export default ExpenseDetail;
