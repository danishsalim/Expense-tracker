
import './components/Expenses/Expenses.css'
import NewExpense from "./components/NewExpense/NewExpense"
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
 const data = [
  {
    id: 'e1' ,
    title:'Toilet Paper' ,
    amount: 84.12,
    date:new Date(2021,2,12) ,
    LocationOfExpenditure:"Reliance mart"

  },
  {
    id: 'e2' ,
    title: 'New TV',
    amount: 799.5,
    date:new Date(2022,10,9) ,
    LocationOfExpenditure:'Reliance mart'
  },
  {
    id:'e3' ,
    title: 'Car Insurance',
    amount: '294.1',
    date:new Date(2022,12,9) ,
    LocationOfExpenditure:'lulu Mall'
  },
  {
    id: 'e4' ,
    title: 'New Desk',
    amount: '450',
    date:new Date(2023,12,7) ,
    LocationOfExpenditure:'Zudio'
  }
];

function App() {
  const [expenses,setExpenses] = useState(data)
  const addExpenseHandler = expense => {
    console.log("in app.js");
    console.log(expense);
    setExpenses([...expenses,expense])
  };

  return (
    <>
      <NewExpense  onAddExpense = {addExpenseHandler} />
      <Expenses  items={expenses} /> 
    </>
   
  );
}

export default App;
