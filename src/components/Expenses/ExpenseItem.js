import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import "./ExpenseItem.css";
const ExpenseItem=(props) =>{
    const clickHandler =()=>{
      console.log('Clicked!!!');
    }
    const deleteHandler=()=>{
      console.log(' Deleted');
    }
  return <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <ExpenseDetails amount={props.amount} loaction={props.loaction} title={props.title}/>
        <button onClick={clickHandler}>Change title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
    </Card>;
}

export default ExpenseItem;
