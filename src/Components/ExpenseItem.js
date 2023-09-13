import React, {useState} from 'react'

function ExpenseItem(props){
    let amount = props.amount
    let day = props.date.toLocaleString('en-US', {day: '2-digit'})
    let month = props.date.toLocaleString('en-US', {month: 'short'})
    let year = props.date.getFullYear();
    let title = props.title
    return (
       <div className="w-full bg-sky-300 p-4 my-2 flex rounded-2xl justify-evenly hover:bg-white">
            <div>{month}, {day} <br/> {year}</div>
            <div className="w-2/3 flex justify-between items-center">
                <h2 className='text-2xl font-semibold text-slate-800'>{title}</h2>
                <h4 className='price'>${amount}</h4>
            </div>
       </div>
    )
}

export default ExpenseItem;