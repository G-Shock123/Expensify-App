import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import {ExpenseSummary} from '../../components/ExpenseSummary'
import altFilters from '../fixtures/filters'



test('Making sure rendered properly when everthing is there ',()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()

})

test('Making sure rendered properly when everthing is there ', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} filters={altFilters}/>)
    expect(wrapper).toMatchSnapshot()

})