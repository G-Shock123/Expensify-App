import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters}from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    wrapper = shallow(<ExpenseListFilters
        filters ={filters}
        setTextFilter = {setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
        )
})

test('Should render expenselistfilter correctly',()=>{

    expect(wrapper).toMatchSnapshot()
})

test('Should render expenselistfilter with alt data correctly', () => {
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})


test('should handl the text change, calling the correct propr',()=>{
    const e={
        target:{
            value:'text'
        }
    }
    wrapper.find('input').prop('onChange')(e)

    expect(setTextFilter).toHaveBeenLastCalledWith('text')

})

test('Should sort by date',()=>{
    const e={
        target:{
            value:'date'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByDate).toHaveBeenCalledTimes(1)
})

test('Should sort by amount', () => {
    const e = {
        target: {
            value: 'amount'
        }
    }
    wrapper.find('select').prop('onChange')(e)
    expect(sortByAmount).toHaveBeenCalledTimes(1)
})

test('Should handle date changes',()=>{
    const startDate= 0
    const endDate =1

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(0)
    expect(setEndDate).toHaveBeenLastCalledWith(1)
})

test('should handle date focus changes',()=>{
    const calenderFocused = 'endDate'

 
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)

    expect(wrapper.state('calenderFocused')).toBe('endDate')
})