import ExpenseItem from "./ExpenseItem" 
import Form from "./Form";
function ExpenseCard({data}){
    return (
        <div className="w-1/2 h-[500px] px-4 overflow-y-auto ">
            {
                data.map(exp=>(
                    <ExpenseItem 
                        title={exp.expTitle}
                        date={exp.expDate}
                        amount={exp.expAmount} />
                ))
            }
        </div>
    )
}

export default ExpenseCard;