import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';

import filters from '../reducers/filters';
import { setTextFilter, sortByAmount,sortByDate,setStartDate, setEndDate } from '../actions/filters';
import expenses from '../reducers/expenses';



class  ExpenseListFilters extends React.Component {   
   state ={
      calenderFocused: null,
   } ;  //nameing it the same as we did in ExpenseForm calenderFocused: keeping track of it and passing it down into the React dates components
   
   onDatesChange = ( {startDate, endDate})=> {
      this.props.dispatch(setStartDate(startDate)); //passing in the new startDate
      this.props.dispatch(setEndDate(endDate));

   }; //This function is going to get called by the react-dates library, with an object, on that object we are going to have a startDate & endDate, we are destucturing that object and passing it in           
   
   onFocusChange =(calenderFocused)=>{//the errow function gets the new value
      this.setState(()=>({calenderFocused}));//passing in an updater function & returning an object
   }
   
   render(){
      return(<div>
         <input type= "text" value ={this.props.filters.text} onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value));
         }} /> {/*seting the value equal to the current serch text*/}
         <select 
           value={this.props.filters.sortBy}  //As the store changes, we make shure to set the vlue
           onChange={(e)=>{   //As we change the select, it changes the store 
     
           if(e.target.value === 'date'){
              this.props.dispatch(sortByDate());
           }
           else if (e.target.value === 'amount'){
              this.props.dispatch(sortByAmount());
           }
         }}>
         <option value='date'>Date</option>
         <option value='amount'>Amount</option>
         </select>
       <DateRangePicker
         startDate ={this.props.filters.startDate}  //startDate is going to be an instance of moment, we have set thatup as the default value for the startDate and endDate in filters(reducers) to be a moment. All we need to do is acsess it 
         startDateId={this.state.id} //Joel 2.nd
         endDate ={this.props.filters.endDate} //getting the value from the filters object
         endDateId={this.state.id} //Joels 2nd
         onDatesChange ={this.onDatesChange}
         focusedInput ={this.state.calenderFocused} //the state that we are tracing up above
         onFocusChange ={this.onFocusChange}
         
         //////////showClearDates is soposed to giv a cloasing x in top right coner of calender, but doesnt
         showClearDates ={true} // has it changed name?
         numberOfMonths ={1} // Nessesary for Andrew but not for me, why?
         isOutsideRange ={()=> false}// Why does this line not make a difference
         />
        
         </div>                                    
         );
   }
}; 



const mapStateToProps = (state)=>{           //we have acsess to entire state via the first argument
         return{
            filters: state.filters, // Giving ExpenseListFilters acsess to props.filters.text we will use that as the value for the input (?Correct defenition(filters is set to filters reducer in the configStore.js  the reduser has a default state object  {text : ''})Correct defenition?)
            expenses: state.expenses
         };                                       
};

export  default 
connect(mapStateToProps)(ExpenseListFilters);


//The goal is to get the old value of of the store, there is a value being set behind the scene in app.js:
//1. store.dispatch(setTextFilter('water'));
//2. setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000)
// we need to make shure that the input matches the current text value of the redux store, so if it changes via a dishpatch call,
// we want to make shure we are reading the value of store and using it inside of this function, This is why we connect ExpenseListFilters to the store. 
//1 import {connect} from 'reaxt-redux';
//2.Creating a connected version of ExpenseListFilters
///export  default connect () Firts one takes mapStateToprops  -determening what we want of of the store
//export  default connect () () Second takes our component

//We have acses to dispatch inside of our connected components, we can call it directly to dispatch actions  , 
//its on props props.dispatch() in it we pas in the action object ex  props.dispatch(setTextFilter)

