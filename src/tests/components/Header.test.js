import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'




test('should render Header correctly',()=>{
   const wrapper = shallow(<Header startLogOut={()=>{}} />)
    expect(wrapper).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify')
    
})

test('Should call startLogout on buttonClick',()=>{
    const startLogOut = jest.fn()
    const wrapper = shallow(<Header startLogOut={startLogOut} />)
    wrapper.find('button').simulate('click')

    expect(startLogOut).toHaveBeenCalled()
    

})