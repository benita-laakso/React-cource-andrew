import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//The Component ExpenseList has acses to the information in the store,pased in as props
///////////////////Regulare unconnected component start//////////////
const ExpenseList = (props)=>(
    <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense)=>{
       return<ExpenseListItem key ={expense.id} {...expense} />
        
    })}
    </div>
);////props.filters -is the filters object
///////////////////Regulare unconnected component end/////////////

////////////////Some function , AS the store changes this function code is automatically re run, getting the fresh values in the component
const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)    // Calling selectExpenses with the nessesery arguments defied in this file: '../selectors/expenses';   And rendering the return values. What evere comes back from the filterd sorted array is what we are going to end up showing to the screen
    
    };
};
////////////Call to connect, that pulls thre regulare component and the function together, enabeling the component to acses data from the store
export default connect(mapStateToProps)(ExpenseList);


//Whenyou connect a component loke ExpenseList to the Redux store, it is reactive, 
//meaning as the store changes your component is going to get re renderd those new values
//This alows us to create very simple component lik ExpenseList, that doesn't need to worry about using store.subscribe or store.getState, 
//it doesnt have to use any component state to manage that data, all of that is done for us by React Redux connect(mapStateToProps)(ExpenseList);
// we simpluy deffine how we want to re render things


// //////////////////OR you can stor info in a const ans then export////////////
// const ConnectedExpenseList = connect((state)=>{
//     return {
//         expenses: state.expenses // reading of state.expenses and passing it down via expenses prop, 
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;
