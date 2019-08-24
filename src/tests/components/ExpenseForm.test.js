import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm/> )
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form with expense data,',()=>{

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} /> )
    expect(wrapper).toMatchSnapshot()
})

test('should render error  for invalid form behaviour',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()

}) 

test('should set description on input change',()=>{
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('Should set note on text area change',()=>{
    const value = "A new note"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)

})

test('Should set mount if valid input',()=>{
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm /> )
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Should nor set mount if no valid input', () => {
    const value = '12.1222'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call on submit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn() //creating a new spy
    const wrapper = shallow(<ExpenseForm  expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })

    expect(wrapper.state('error')).toBe(undefined)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
       })

})

test('Should set new date on date change', ()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)

    expect(wrapper.state('createdAt')).toEqual(now)

})

test('Should change calender focused on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
  
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
   
    
    expect(wrapper.state('calendarFocused')).toBe(focused)
  

})