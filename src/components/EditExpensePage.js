import React from 'react'
import {connect} from 'react-redux'
import ExpenseFrom from './ExpenseForm'
import {startEditExpense,startRemoveExpense } from '../actions/expenses'
import RemoveModal from './RemoveModal'


export class EditExpensePage extends React.Component{
    state={
        selectedOption:undefined
    }

    handleNoChange = () =>{
        this.setState(() => ({ selectedOption: false }))
        console.log(this.state.selectedOption);
        
    }

    handleConfirmRemove = () =>{
        this.setState(() => ({ selectedOption: false }))
        this.onRemove()
        
    }
    onStartRemove = () =>{

        this.setState(() => ({ selectedOption: true }))
        console.log(this.state.selectedOption);
        
    }
    onRemove = () =>{
       
        
        this.props.startRemoveExpense({id:this.props.expense.id})
        this.props.history.push('/')

    }
    onSubmit = (expense)=>{
        console.log(expense);
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
             <div className="page-header">
                <div className ="content-container">
                 <h1 className="page-header__title">Edit Expense</h1>
                </div>
             </div>
             <div className ="content-container">
             
            
                <ExpenseFrom
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}

                />
                <button className="button button--secondary "
                onClick={this.onStartRemove}


                > Remove Expense </button>
                </div>

                <RemoveModal 
                    selectedOption={this.state.selectedOption}
                    handleNoChange={this.handleNoChange}
                    handleConfirmRemove={this.handleConfirmRemove}
                
                />
            </div>

        )
    }


}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}
    
const mapStateToProps = (state, props)=>{
    return{
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)