
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
  },
  {
    id: 'e2' ,
    title: 'New TV',
    amount: 799.5,
    date:new Date(2020,10,9) ,
  },
  {
    id:'e3' ,
    title: 'Car Insurance',
    amount: '294.1',
    date:new Date(2023,11,30) ,//(y,m,d)
  },
  {
    id: 'e4' ,
    title: 'New Desk',
    amount: '450',
    date:new Date(2019,12,7) , //In JavaScript, the month parameter in the Date constructor is zero-based, meaning January is 0, February is 1, and so on. Therefore, when you create a Date object with new Date(2019, 12, 7), you are actually creating a date for the 13th month of 2019, which rolls over to January 2020.
  }
];

function App() {

  const [expenses,setExpenses] = useState(data)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });  
  };
  

  return (
    <>
      <NewExpense  onAddExpense = {addExpenseHandler} />
      <Expenses  items={expenses} /> 
    </>
   
  );
}

export default App;
