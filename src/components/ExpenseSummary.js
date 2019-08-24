import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total' 
import numeral from 'numeral'

export class ExpenseSummary extends React.Component{
    
    
    render(){
        const word = this.props.expenses.length===1?'thing':'things'
        const hiddenAmount = this.props.totalExpenses.length - this.props.expenses.length
        const hiddenText = hiddenAmount=== 1? ` hidden expense not shown as a result of filters.`:`hidden expenses not shown as a result of filters.`
        
        return(
            
            <div>
               <div className="page-header">
                <div className="content-container">
                        <h1 className="page-header__title"> You are looking at <span>{this.props.expenses.length}</span> {word}. The total is <span>{numeral(getExpensesTotal(this.props.expenses) / 100).format('$0,0.00')}</span></h1> 
                        <p className="page-header__paragraph">  <span>{hiddenAmount}</span> {hiddenText} </p>
                        <div className="page-header__actions">
                            <Link className="button" to ="/create">Add Expense</Link>
                        
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        expenses: selectExpenses(state.expenses, state.filters),
        totalExpenses:state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseSummary)