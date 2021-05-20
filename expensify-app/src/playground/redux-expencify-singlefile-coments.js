import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//combineReducers alows us to create multible functions and defines how ower redux aplication changes
//Having only one reduceer would create a realy long complex function, 
//hence we use combineReducers to create multible functions and combine them togetter

//ADD_EXPENSE
//This is a action generator
//description and note are provided by the user, if thre isnt one an empty string is set to default
// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Action generator, function that takes input returns action object
// destructuring the object pased in and pulling of the id so it can be used in the reducer
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE, action generator function
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE'://When action type 'ADD_EXPENCE' 
    //We want to add a new expence to the array
      return [
        ...state,//returning a new array, starting of with copying all the items from the existig array,spreading out current expences
        action.expense
      ];//adding the new item, the action.expence object
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);//We are working with an array of expenses, we just need the id from the individual item, here we are distructuring the individual item and pulling of th id 
     //state does not chang state.filter returns a new array
      case 'EDIT_EXPENSE':
      return state.map((expense) => {//going through every single item    Changing only the one whos id maches the action id, for the others returning what they currently are
        if (expense.id === action.id) {
          return {
            ...expense,//grabbing al of the properties from the existing one
            ...action.updates//only overriding the ones that user pased in
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
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

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {//expense the compleat array that we want to filter, {distructuring the filters object}
  return expenses.filter((expense) => {//expenses.filter alowing us to return a subset of all of the expenses
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; ///this will resault in true if startDate is not equal to a number
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
     ////expense.description.toLowerCase()----converting the string expense.description to lowercas
       //.includes(text);--------- chequing if the converted string contains the text string
    ///figur out if the expenses.discription has the text variable string inside of it
    
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => { //-1 if a should come first, 1 if b should come first
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;// if its true b comes first otherwise a commes first. This will make the most resent expence come up top
    } 
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });//sort gets called on an array and returnes the array
};

// Store creation
// combineReducers() taket an object as its argumnt
//on the object we provide key value pairs, 
//the key is the root state name,the value is the reducer that is suposed to manage that

const store = createStore(
  combineReducers({
    expenses: expensesReducer, //root state name we are giving to the reducer:reducer that manages that
    filters: filtersReducer
  })
);
//making call to store.subscribe to trak changes
store.subscribe(() => {
  const state = store.getState();//the entire state, the entire expenses array and all filters
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
//addExpense gets dispathed to both redusers, in the reduser(expencesReducer) where we want to use it we create a  case type:'ADD_EXPENCE'
//if you dispatch an action object it comes back as the return value
//We are storing the object in a variable

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());


console.log('-----------');
store.dispatch(sortByAmount());


console.log('-----------');
store.dispatch(setTextFilter('water'));


console.log('-----------');
setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
},3000)

//store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

//demoState represents the final state
//represents the various things we vant to keep trak of
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

  //sort();
  //We call sort on Arrays with a simple array wecan call sort directly without any arguments
  //array of strings gets sorted alphabetically
  //const fruit = ['cherries', 'apples','bannanas'];
  //fruit.sort();       ------- ['apples', 'bannanas', 'cherries']
  //An Array with more complex data like objects, there is no inherent value,then we need to deffine a compare functiom.
  
  //Compare function
  //Allows us to wright code to determin which item should come first, when lookin att two distinked items
  //We get a and b in passed in the function
  //we return -1 if a should come first
  //we return 1 if b should come first