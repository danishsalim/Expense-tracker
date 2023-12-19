import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpense = props.items.filter((expense)=>
                  {
                  return expense.date.getFullYear().toString()=== filteredYear 
                  }
            )
  let expensesContent = <p>No Expense Found</p>
  if(filteredExpense.length===1)
  {
    expensesContent = filteredExpense.map((expense,idx) => (
                    <div key={idx}> 
                      <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                      />
                      <p> Only single Expense here. Please add more...</p>
                     </div>   
                   ))
  }
  else if(filteredExpense.length>0)
  {
    expensesContent = filteredExpense.map((expense) => (
                      <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                      />
                      ))
  }
  

  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  </div>
  );
};

export default Expenses;