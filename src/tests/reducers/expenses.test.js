import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'



test('Should set default state',()=>{

    const action = expensesReducer(undefined,{type:'@@INIT'})
    expect(action).toEqual([])
    
})

test('Should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove anything when no id is given', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 5030
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an exepnse',()=>{
    const expense ={
    id: '15',
        description: 'Phone',
            note: '',
                amount: 403,
                    createdAt: 0
    }

    const action ={
        type:'ADD_EXPENSE',
        expense: expense
       

    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense',()=>{
    const updates = {
        id: expenses[0].id,
        description: 'Phone',
        note: '',
        amount: 403,
        createdAt: 0
    }

    const action ={
        type: 'EDIT_EXPENSE',
        updates:updates,
        id:expenses[0].id

    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual ([updates,expenses[1],expenses[2]]) 
})

test('should not edit expense if expense not found ', () => {
    const updates = {
        id: '323',
        description: 'Phone',
        note: '',
        amount: 403,
        createdAt: 0
    }

    const action = {
        type: 'EDIT_EXPENSE',
        updates: updates,
        id: "32"

    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})



test('should set Expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses:[expenses[1]]

    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])

})