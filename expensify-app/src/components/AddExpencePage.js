import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';


const AddExpencePage =(props)=>{
    
    return(<div>
       <h1>Add Expence</h1> 
        <ExpenseForm
        onSubmit ={(expense)=>{
            props.dispatch(addExpense(expense));//adding the data to redux store
            props.history.push('/');//automating the rediract,push takes a single string argument, '/' represents the dashboard page,switchinh over as if we clicked the link, meening we are not going through the full page refresh, it is going to switch over using browser routing
            //switching pages     props.history.push('/');
        }}
        />
        </div>);
 };

 //Dynamicaly defining what we want to do when data is valid
// props.dispatch(addExpense(expense));
// props.history.push('/');

//WE are providing a single prop which will be a function
//We set the prop = function that gets called when the form getts submitted with valid data and we gett thedata back
//We gett the expense object back with all of the propertys we would expect

 export default connect()(AddExpencePage);
 // We are gona pass the data up, this alows us to determine what to do with the data when the user submits the form on a dynamic basis
//For this component we can dispatch AddExpens action

//The Components we render inside of react-router gett acsess to a lot of special props  ex props.history


