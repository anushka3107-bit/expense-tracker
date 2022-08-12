import React,{useState}from "react";
import './ExpensesForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
       setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title :enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate),
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text"
                 value = {enteredTitle} 
                 onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number"
                 value={enteredAmount} 
                 onChange={amountChangeHandler}
                 min = '0.01'
                 steps= "0.01"/>
           </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" 
                value = {enteredDate}
                onChange={dateChangeHandler} 
                min = "2022-01-01" 
                max = "2023-12-31"/>
            </div>
        <div className="new-expense__actions">
            <button type = "submit">Add Expenses</button>
        </div>
        </div>
    </form>
}


export default ExpenseForm;