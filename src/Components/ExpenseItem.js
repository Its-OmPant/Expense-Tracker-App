import React, {useState} from 'react'

function ExpenseItem(props){
    console.log(`Props:${props.id}`)
    let amount = props.amount
    let day = props.date.toLocaleString('en-US', {day: '2-digit'})
    let month =  props.date.toLocaleString('en-US', {month: 'short'})
    let year =  props.date.getFullYear()
    let title = props.title


    const deleteItem = (e)=>{
        console.log(e.target.parentElement)
        console.log(props.id)
    }

    return (
       <div className='flex justify-between px-4 py-2 bg-sky-200 rounded-xl w-4/5 sm:w-3/5 lg:w-1/2'>
            <div>{month}, {day} <br/> {year}</div>
            <div className='w-3/5 pl-3'>
                <h2 className='text-xl text-slate-700 font-semibold'>{title}</h2>
                <h4 className='text-red-500'>${amount}</h4>
            </div>
            <div className='flex gap-3 text-lg'>
                <button><i className="fa-regular fa-pen-to-square text-green-600"></i> </button>
                <button onClick={deleteItem}> <i className="fa-regular fa-trash-can text-red-600"></i> </button>
            </div>
       </div>
    )
}

export default ExpenseItem;