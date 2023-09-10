import ExpenseItem from "./ExpenseItem" 
function ExpenseCard({data}){
    return (
        <>
            <ExpenseItem 
            title={data[0].expTitle}
            date={data[0].expDate}
            amount={data[0].expAmount} />
            <ExpenseItem 
            title={data[1].expTitle}
            date={data[1].expDate}
            amount={data[1].expAmount} />
            <ExpenseItem 
            title={data[2].expTitle}
            date={data[2].expDate}
            amount={data[2].expAmount} />
            <ExpenseItem 
            title={data[3].expTitle}
            date={data[3].expDate}
            amount={data[3].expAmount} />
        </>
    )
}

export default ExpenseCard;