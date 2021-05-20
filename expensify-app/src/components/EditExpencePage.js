import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpencePage = (props)=>{
   // console.log(props);
    return(
        <div>
        <ExpenseForm 
        expense ={props.expense} //Definging a new prop on ExpenseForm, that is an existing expense/Taking the expense and passing it down, defining it as a prop
        onSubmit={(expense)=>{console.log('updated',expense);//We have acses to the expense object    The updates are on the first argument expense
        props.dispatch(editExpense(props.expense.id, expense)); //dispatching the action object that editExpense returns. editExpense takes 2 arguments, 1st id - 2nd the updates
        props.history.push('/'); //rederecting to landingpage
    }}/>
    <button onClick={()=>{
       props.dispatch(removeExpense({id: props.expense.id})); //dispatch has been destructed above, hence we don´t do store.dispatch();
       props.history.push('/'); 
    }}>Remove</button>
        </div>
        );
};

//We want to give the Component the current expense object, props can be pased in as second argument in mapStateToProps
const mapStateToProps =(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>{   //find() alows us to surch through an array looking for a single item, we deturmine wether we found the item by returning true from the callback
            return expense.id === props.match.params.id;
        })
    };
};
export default connect(mapStateToProps) (EditExpencePage);

//This Component needs to provide the current values for the expense
//We need to add a single prop that gets passed into expenseForm, it will be optional,if it exists we will use the values
//1. Link over to the edit expense page

//Connecting the Component with redux store:
//1.import {connect} from 'react-redux';
//2.const mapStateToProps =(state,props)=>{.........};
//3.export default connect(mapStateToProps) (EditExpencePage);

//react-router renders our higher order component:
//export default connect(mapStateToProps) (EditExpencePage);
//The higher order component pases th props through, it also alows us to add on some new ones:
// return{
//     expense:state.expenses.find((expense)=>{   //find() alows us to surch through an array looking for a single item, we deturmine wether we found the item by returning true from the callback
//         return expense.id === props.match.params.id;
//     })
// }; 