import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter} from '../actions/filters'
import{sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

// you confuse calender with calendar occasionally

export class ExpenseListFilters extends React.Component{
    state= {
        calenderFocused: null
    }
    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)

    }
    onFocusChange = (calenderFocused) =>{
        this.setState(()=>({calenderFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    

    }

    onSelectChange = (e) => {
        if (e.target.value === 'amount'){
            this.props.sortByAmount()
            console.log(e.target.value);
            

        }else if(e.target.value ==='date'){
            this.props.sortByDate()
            console.log(e.target.value);
        }
        

    }
    render(){
        return(
            <div className="content-container">
            <div className="input-group"> 
                <div className="input-group__item">
                        <input
                            className="text-input"
                            placeholder="Search Expenses"
                            type="text"
                            value={this.props.filters.text} onChange={this.onTextChange}
                        />
                </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            onChange={this.onSelectChange}
                            value={this.props.filters.sortBy}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            isOutsideRange={() => { false }}
                            numberOfMonths={1}
                            showClearDates={true}
                        />
                </div>
               
            
            </div>
             

                
               

            </div>

        )
    }
}


const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch)=> ({
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate) => dispatch(setEndDate(endDate)),
    setTextFilter :(value)=>dispatch(setTextFilter(value)),
    sortByAmount:()=> dispatch(sortByAmount()),
    sortByDate:()=>dispatch(sortByDate())



})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters) 