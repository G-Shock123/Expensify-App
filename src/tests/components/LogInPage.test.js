import React from 'react'
import {shallow} from 'enzyme'
import {LogInPage} from '../../components/LogInPage'

test('Should be the same is prior snapshot of loginpage',()=>{
    const wrapper = shallow(<LogInPage />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call Start Log in on buttonClick', () => {
    const startLogIn = jest.fn()
    const wrapper = shallow(<LogInPage startLogIn={startLogIn} />)
    wrapper.find('button').simulate('click')

    expect(startLogIn).toHaveBeenCalled()


})