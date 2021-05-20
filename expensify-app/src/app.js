
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';//we have a single file we are importing
import'normalize.css/normalize.css'
import './styles/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



//creating a store and geting the return value from the configureStore
// this gives us acsess to things like store.dispatch()  store.getState(); store.subscribe()
const store = configureStore(); 

//addExpense  dicription waterbill
 store.dispatch(addExpense({ description: 'Water bill', amount:4500}));
 store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
 store.dispatch(addExpense({ description: 'Rent', amount:109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters );

console.log(visibleExpenses);

const jsx =(<Provider store ={store}>
    <AppRouter/>
     </Provider>
    
);
//https://reactrouter.com/web/guides/quick-start
ReactDOM.render(jsx, document.getElementById('app'));
