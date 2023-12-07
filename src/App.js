import ExpenseItem from "./components/ExpenseItem";
const expenses = [
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
    <div>
      <h2>Let's get started!</h2>
     {
      expenses.map((item)=>(
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} LocationOfExpenditure={item.LocationOfExpenditure}></ExpenseItem>
      ))
     }
    </div>
  );
}

export default App;
