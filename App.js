import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 250, date: new Date(2021, 2, 24) ,loaction:'Manali'},
    { title: "Car Insurance", amount: 450, date: new Date(2021, 2, 28),loaction:'Delhi' },
    { title: "Food", amount: 150, date: new Date(2021, 2, 23) ,loaction:'Hardoi'},
    { title: "Movie", amount: 360, date: new Date(2021, 3, 19) ,loaction:'Bareilly'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with shivang
        </a>
      </header>
      
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        loaction={expenses[0].loaction}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        loaction={expenses[1].loaction}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        loaction={expenses[2].loaction}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        loaction={expenses[3].loaction}
      ></ExpenseItem>
    </div>
  );
}

export default App;
