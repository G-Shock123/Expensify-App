import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment'

test('Sets the text in setTextFilter to whatever tet was provided',()=>{


    const result = setTextFilter('Class of 2010')
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Class of 2010'
    })
})

test('Sets text in setTextfilter to an empty string if no text is provided',()=>{

    const result =setTextFilter()
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('Should generate set Start Date action object',()=>{
    const result = setStartDate(moment(0))

    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })

})

test('Should generate set End Date action object', ()=>{
    const result = setEndDate(moment(0))

    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })

})


test('Shound generate the sortBy Date Action object',()=>{
   const result = sortByDate()
   
   expect(result).toEqual({
       type:'SORT_BY_DATE'
   })

})

test('Shound generate the sortby Amount Action object', () => {
    const result = sortByAmount()
    expect(result).toEqual({
        type:'SORT_BY_AMOUNT'
    })

})

