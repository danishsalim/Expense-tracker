
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
    date:new Date(2019,12,9) ,
  },
  {
    id: 'e4' ,
    title: 'New Desk',
    amount: '450',
    date:new Date(2019,12,7) ,
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
