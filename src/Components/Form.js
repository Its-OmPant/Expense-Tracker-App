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
       <form onSubmit={formSubmit} className="w-1/2 flex justify-between px-6 my-2 bg-white p-4 rounded-xl ">
            <input className="p-2 border-2 rounded-lg" type="text" value={inpTitle} placeholder="Enter Expense" onChange={onTitleChange}  />
            <input className="p-2 border-2 rounded-lg" type="number" value={inpAmount} placeholder="Enter Amount" min={0} step={1} onChange={onAmountChange} />
            <input className="p-2 border-2 rounded-lg" type="date" value={inpDate} min={0} onChange={onDateChange} />
            <button type="submit" ><i className="fa-solid fa-circle-plus text-4xl text-sky-700 "></i></button>
       </form>
    );
}

export default Form;