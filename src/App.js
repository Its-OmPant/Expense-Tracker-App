import React, {useState, useEffect} from 'react';
import ExpenseCard from './Components/ExpenseCard'
import Form from './Components/Form';
// let dummyData = [
//     {
//         expDate: new Date(2023,5,1),
//         expTitle: "House rent",
//         expAmount: 5860
//     },
//     {
//         expDate: new Date(2022,5,2),
//         expTitle: "Car's Insurance",
//         expAmount: 1254
//     },
//     {
//         expDate: new Date(2021,5,3),
//         expTitle: "Phone E.M.I",
//         expAmount: 5877
//     },
//     {
//         expDate: new Date(2020,5,4),
//         expTitle: "Life Insurance",
//         expAmount: 205.23
//     }
// ]

function App(){
    const getData = (d)=>{
        console.log(d)
        setItems([d, ...items])
    }

    //  const [expenses, setExpenses] = useState([])
    let initItems = JSON.parse((localStorage.getItem('items'))) ;
    if(initItems === null)
        initItems = []
    console.log(initItems)
    // console.log( typeof initItems)
    // console.log(JSON.parse(initItems))
     const [items ,setItems] = useState(initItems);

     useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(items))
     },[items])

    return(
        <div className='app min-h-screen w-screen bg-slate-200 flex flex-col items-center'>
            <h2 className='appName my-4 p-2 text-lg w-4/5 text-center rounded-2xl bg-teal-800 text-white font-semibold shadow-lg sm:text-xl sm:w-3/5 lg:w-1/2'>Expense Tracker App</h2>
            <Form sendData={getData} />
            <ExpenseCard data={items} />
        </div>
    );
}

export default App;