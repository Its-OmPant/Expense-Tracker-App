import ExpenseCard from './Components/ExpenseCard'
import './App.css'

function App(){
    let expenses = [
        {
            expDate: new Date(2023,5,9),
            expTitle: "House rent",
            expAmount: 5860
        },
        {
            expDate: new Date(2022,5,9),
            expTitle: "Car's Insurance",
            expAmount: 1254
        },
        {
            expDate: new Date(2021,5,9),
            expTitle: "Phone E.M.I",
            expAmount: 5877
        },
        {
            expDate: new Date(2020,5,9),
            expTitle: "Life Insurance",
            expAmount: 205.23
        },
    ]
    return(
        <div className='app'>
            <h2 className='appName'>Expense Tracker App</h2>
            <ExpenseCard data={expenses} />
        </div>
    );
}

export default App;