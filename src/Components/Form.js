import React, {useState} from "react";

const Form = (props)=>{

    const [inpTitle, setTitle] = useState('')
    const [inpAmount, setAmount] = useState('')
    const [inpDate, setDate] = useState('')

    const onTitleChange = (event)=>{
        setTitle(event.target.value)
    }
    const onAmountChange = (event)=>{
        setAmount(event.target.value)
    }
    const onDateChange = (event)=>{
        setDate(event.target.value)
    }

    const formSubmit = (e)=>{
        e.preventDefault();
        let d = {
            id: Math.round(Math.random() * 100000),
            expDate:new Date(inpDate),
            expTitle:inpTitle,
            expAmount:inpAmount
        }

        console.log(d)

        props.sendData(d);
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
       <form onSubmit={formSubmit} className="w-4/5 my-4 flex flex-col gap-2 sm:w-3/5 lg:w-1/2">
            <input className="p-2 text-center rounded-md sm:text-lg" type="text" value={inpTitle} placeholder="Enter Expense" onChange={onTitleChange} required />

            <input className="p-2 text-center rounded-md sm:text-lg" type="number" value={inpAmount} placeholder="Enter Amount" min={0} step={1} onChange={onAmountChange} required/>

            <input className="p-2 text-center rounded-md sm:text-lg" type="date" value={inpDate} min={0} onChange={onDateChange} required/>
            
            <button type="submit" className="p-2 text-center rounded-md sm:text-lg bg-sky-400" >Add Item</button>
            <button type="submit" className="hidden" ><i className="fa-solid fa-circle-plus text-4xl text-sky-700 "></i></button>
       </form>
    );
}

export default Form;