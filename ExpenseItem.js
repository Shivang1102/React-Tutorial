import './ExpenseItem.css';
function ExpenseItem(){
    const expenseTime = new Date(2021,2,24);
    const expenseTitle ='Car Insurance';
    const expenseAmount= 235.9;
    const LocationofExpenditure= 'Manali';
    return <div className='expense-item'>
        <div >{expenseTime.toISOString()}</div>
       
        <div className='expense-item__description'>
         <h2>{LocationofExpenditure}</h2>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>
}

export default ExpenseItem;