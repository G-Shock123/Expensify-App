import moment from 'moment'
import filtersReducer from '../../reducers/filter'
import filter from '../../reducers/filter';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'} )
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})

test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe('amount')

})

test('should set sortby to date',()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'

    }
    const action ={type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date')
})

test('Should set the text data', ()=>{
   
    const action = {type:'SET_TEXT_FILTER', text:'Class of 2020'}
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe('Class of 2020')

})

test('Should set the start date',()=>{

    const action ={type:'SET_START_DATE',startDate:moment()}
    const state = filtersReducer(undefined,action)
    expect(state.startDate).toEqual(moment())

})

test('Should set the end date', () => {

    const action = { type: 'SET_END_DATE', endDate: moment() }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment())

})