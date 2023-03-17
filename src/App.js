import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App=()=> {
  const expenses = [
    { title: "Toilet Paper", amount: 250, date: new Date(2021, 2, 24) ,loaction:'Manali'},
    { title: "Car Insurance", amount: 450, date: new Date(2021, 5, 28),loaction:'Delhi' },
    { title: "Food", amount: 150, date: new Date(2021, 6, 23) ,loaction:'Hardoi'},
    { title: "Movie", amount: 360, date: new Date(2021, 3, 19) ,loaction:'Bareilly'},
  ];
  return (
   <div>
      <NewExpense/>
      <Expenses items={expenses}/>
  </div>
  )
}

export default App;
