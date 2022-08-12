import Expense from "./Components/Expenses/Expense";
import NewExpesnes from "./Components/NewExpenses/NewExpenses";

function App() {
  const expense = [
    {
      id: 'i1',
      title: "Car",
      amount: 235.8,
      date: new Date(2022, 31, 7),
    },
    {
      id: 'i2',
      title: "truck",
      amount: 908,
      date: new Date(2022, 8, 12),
    },
    {
      id: 'i2',
      title: "truck1",
      amount: 908,
      date: new Date(2022, 8, 11),
    },
    {
      id: 'i2',
      title: "truck2",
      amount: 907,
      date: new Date(2022, 8, 10),
    }
  ];
  
  const addExpenseHandler = expense=>{
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div>
     <NewExpesnes onAddExpense = {addExpenseHandler}/>
      <Expense items = {expense}/>

    </div>
  );
}

export default App;
