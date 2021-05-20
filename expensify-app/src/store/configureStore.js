import {createStore,combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer, //root state name we are giving to the reducer:reducer that manages that
          filters: filtersReducer
        }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//This line makes the redux devtools work
     
      return store;
};

