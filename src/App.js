import React, {useState, useEffect} from 'react';
import ExpenseCard from './Components/ExpenseCard'
import Form from './Components/Form';
let dummyData = [
    {
        expDate: new Date(2023,5,1),
        expTitle: "House rent",
        expAmount: 5860
    },
    {
        expDate: new Date(2022,5,2),
        expTitle: "Car's Insurance",
        expAmount: 1254
    },
    {
        expDate: new Date(2021,5,3),
        expTitle: "Phone E.M.I",
        expAmount: 5877
    },
    {
        expDate: new Date(2020,5,4),
        expTitle: "Life Insurance",
        expAmount: 205.23
    }
]

function App(){

    const getData = (d)=>{
        console.log(d)
        setExpenses([d, ...expenses])
    }

     const [expenses, setExpenses] = useState(dummyData)

    //  const [items ,setItems] = useState([]);

    //  useEffect(()=>{
    //     localStorage.setItem('items', JSON.stringify(items))
    //  },[items])

    return(
        <div className='app min-h-screen w-screen bg-slate-200 flex flex-col items-center'>
            <h2 className='appName mt-6 p-4 text-2xl w-1/2 text-center rounded-2xl bg-yellow-200 '>Expense Tracker App</h2>
            <Form sendData={getData} />
            <ExpenseCard data={expenses} />
        </div>
    );
}

export default App;