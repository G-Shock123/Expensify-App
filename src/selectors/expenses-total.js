import React from 'react'

const getExpensesTotal = (expenses)=>{
   /* if(expenses[0]===undefined){
        return 0
       
        
    }
    else if (expenses){
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        const amounts = expenses.map(expense => expense.amount)
        console.log(amounts);


        return amounts.reduce(reducer)
        

    }else{
        return 0
    }
   */
  return expenses.map((expense)=>expense.amount).reduce((sum,value)=>sum+value,0)

}




export default (getExpensesTotal)