import {shallow} from 'enzyme'
import RemoveModal from '../../components/RemoveModal'
import React from 'react'



let wrapper, handleNoChange, handleConfirmRemove

beforeEach(() => {
    wrapper = shallow(<RemoveModal handleConfirmRemove={handleConfirmRemove} handleNoChange={handleNoChange} selectedOption={true} />)
    handleNoChange = jest.fn()
    handleConfirmRemove= jest.fn()
})



test('Render remove modal',()=>{
    const wrapper = shallow(<RemoveModal />)
    expect(wrapper).toMatchSnapshot()
})

