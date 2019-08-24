import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('Should return 0 if no expenses',()=>{

    const result = selectExpensesTotal([])
    expect(result).toBe(0)
    
   
})

test('should correctly add up 1 expense',()=>{
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(expenses[0].amount)
})

test('should add up multiple expenses',()=>{
    const result = selectExpensesTotal(expenses)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const amounts = expenses.map(expense => expense.amount)
    const total = amounts.reduce(reducer)

    expect(result).toBe(total)
})