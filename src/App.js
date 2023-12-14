import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import './components/Expenses/Expenses.css'
import NewExpense from "./components/NewExpense/NewExpense"
export const expenses = [
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
]
function App() {
  return (
    <>
      <NewExpense />
      <Card className='expenses'>
      {
        expenses.map((item)=>(
          <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date} LocationOfExpenditure={item.LocationOfExpenditure}></ExpenseItem>
        ))
      }
      </Card>
    </>
   
  );
}

export default App;
