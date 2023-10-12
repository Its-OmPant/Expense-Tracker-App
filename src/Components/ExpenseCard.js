import ExpenseItem from "./ExpenseItem" 
function ExpenseCard({data}){
    return (
        <div className="w-full flex flex-col gap-3 items-center mt-2 pb-8">
            {
                data.map(exp=>{
                    if (exp.expTitle !== undefined && exp.expAmount !== undefined && exp.expDate)
                       return <ExpenseItem 
                            title={exp.expTitle}
                            date={new Date(exp.expDate)}
                            amount={exp.expAmount} />
                    else
                        return 0
                })
            }
        </div>
    )
}

export default ExpenseCard;