import './ExpenseItem.css'
function ExpenseItem(props){
    let title = props.title
    let amount = props.amount
    let day = props.date.toLocaleString('en-US', {day: '2-digit'})
    let month = props.date.toLocaleString('en-US', {month: 'short'})
    let year = props.date.getFullYear();

    return (
       <div className="expenseItem">
            <div>{month}, {day}, {year}</div>
            <div className="expDesc">
                <h2>{title}</h2>
                <h4 className='price'>${amount}</h4>
            </div>
       </div>
    )
}

export default ExpenseItem;