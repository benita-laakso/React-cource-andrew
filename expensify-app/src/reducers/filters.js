import moment from 'moment';
// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  //No need to stor in a const and export at bottom of page
  export default(state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'//copying all of the values from the old filters object, seting sortBy to the string 'amount'
        };
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'date'
        };
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate //New end date is available on action.endDate 
        };
      default:
        return state;
    }
  };
  