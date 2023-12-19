import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData={
      id:parseInt(Math.random()*300).toString(),
      ...enteredExpenseData 
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler=(e)=>{
      setIsEditing(true)
  }
  const stopEditingHandler=(e)=>{
       setIsEditing(false)
  }
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense