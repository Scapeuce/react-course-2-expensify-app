import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import  {DateRangePicker} from  'react-dates'

class ExpenseListFilters extends React.Component {
    state = {
    calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    onTextChange = (e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
            
    }
    onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value='amount'>Amount</option>
                    <option value='date'>Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    startDateId='ST_DATE'
                    endDateId='END_DATE'
                    numberOfMonths={1}
                    isOutsideRange={()=>false}

                />
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps) (ExpenseListFilters);