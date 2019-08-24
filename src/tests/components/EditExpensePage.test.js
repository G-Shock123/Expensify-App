import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, history, wrapper, startRemoveExpense

beforeEach(() => {
    startEditExpense = jest.fn()
    history = { push: jest.fn() }
    startRemoveExpense = jest.fn()

    wrapper = shallow(<EditExpensePage startRemoveExpense={startRemoveExpense} startEditExpense={startEditExpense} history={history} expense={expenses[0]}/>)

})


test('Should render edit expense page correctly',()=>{
   
    expect(wrapper).toMatchSnapshot()
})


test('Should handle edit expense ', () => {
    

    wrapper.find('ExpenseForm').prop('onSubmit')( expenses[0])

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])
})

 test('Should handle Start remove expense ', () => {


       wrapper.find('button').prop('onClick')()
       expect(wrapper.state('selectedOption')).toBe(true)
 })

test('Should call start Remove expense with right id ', () => {
   

    wrapper.find('RemoveModal').prop('handleConfirmRemove')()
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id })
})

test('Should not remove expense if yes not clicked',()=>{
    wrapper.find('RemoveModal').prop('handleNoChange')()
    expect(wrapper.state('selectedOption')).toBe(false)
    expect(history.push).not.toHaveBeenCalled()
    expect(startRemoveExpense).not.toHaveBeenCalled()
    
})
