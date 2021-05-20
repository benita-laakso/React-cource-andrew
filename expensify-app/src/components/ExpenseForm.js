import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//The goal of ExpenseForm is to be reused in AddExpensePage and in the EditExpensePage; if we are adding or editing we need to dispatch different stuff

//const date = new Date();
const now = moment();
console.log(now.format('Do MMM YYYY'));
//11th May 2021
export default class expenseForm extends React.Component{
    constructor(props){//getting the props 
        super(props);//passing the props up to super
     
        this.state ={// Defining this.state. Taking the 4 first state values & only use the defaults seen here, if no expens was pased down, that makes shur add expense still works. If an expense was pased down, we want to start hese of at thees values, to get that done we have to look at the props, thats why we have to define our state in the constructorfunction, to acsessthe props
            description: props.expense ? props.expense.description : ' ',  //Chequing if props.expense exists, If it does we start the description of at the same value. If it doesn'rt exsist we will start it off as an empty string
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString(): '', // Comming in this is a number that stors the total amount of cents. We want a string, with the desimal place in place.(/100) alows us to take the number and convert it to a string,  toString()
            createdAt: props.expense ? moment(1000) : moment(), //if it exists we want to create an instanse of moment, at a spesific point in time, we do this by passing a timestamp in. in this case we have acses to the time on props.expense.createdAt
            calenderFocused: false,//pasing it down 
            error:' '
        }
    }
  
    // //Local Component state
    // state={
    //     description:' ', //This is the only thing we are gona requre the user to add,that the user actualy changes
    //     note:'',
    //     amount:'',
    //     createdAt:moment(),
    //     calenderFocused: false,//pasing it down 
    //     error:' '
    // }; // Using local Component State to trak the state of al of the inputs
    // // //Only when the user actualy submits the form,will we do something with that information
    // // //We are keeping track of the changes to every single input, when they submit the for we will send it of to Redux,to either edit the existing expense or create the nwe one
    
    //We need acses to the argument (e); this is where the value lives
    onDescriptionChange =(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    };
    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>({
            note:note
        }));
    };
    onAmountChange =(e)=>{
        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){//Why does my code still alow the dot first?d{1,}
            this.setState(()=>({amount}));
        }
      
    };
    ///Alternative code
    // onNoteChange=(e)=>{
    //     e.persist();
    //     this.setState(()=>({note: e.target.value}));
    // }
     
    // The api gets called with the monent pased in, above we have set createdAt:moment()
    onDateChange= (createdAt)=>{
        this.setState(()=>({createdAt}));
    };
    onFocusChange =({focused})=>{ //first argument is an object({focused}),destructuring and grabbing the focused property, then setting it on the state
    this.setState(()=>({calenderFocused:focused})) //setting calenderFocused equal to what ever came back from focused
    };
    onSubmit = (e)=>{
        e.preventDefault();// Preventing pbowser to do full page refresh
        if(!this.state.description || !this.state.amount){
            
            this.setState(()=>({error :'Please provide description and anount'}))
            //sett error state equal to 'Please provide description and anount'
        }
        else{
            //clear the error
            this.setState(()=>({ error: ' '}))
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount,10)*100, //amount currently is a string ex'123.45'. parsFloat is like parsInt, parsFloat however keeps dessimals in place, passing in our string amount:parseFloat(this.state.amount) and get it over to a real number, providing the base of 10, amount:parseFloat(this.state.amount,10)*100 ,*100 becouse we are working in cents
                createdAt:this.state.createdAt.valueOf(), //This is currently a moment object, there is a moment method we can use to get the time stamp back,(JavaScript works in milliseconds  
                //Unix Timestamp (milliseconds) 1.0.0+edit moment().valueOf();
               note: this.state.note
            });
        }
    };
        render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
          <input 
          type ='text'
          placeholder='Description' //The user adds the description
          value= {this.state.description} //1.Seting the value for this input equal to lhe state value, creating a read only input
          autoFocus
          onChange={this.onDescriptionChange}
          />
          <input
          //type ='number'
          placeholder='amount'
          value ={this.state.amount}
          onChange={this.onAmountChange}
          />
          <SingleDatePicker
          date = {this.state.createdAt}
          onDateChange ={this.onDateChange}
          focused ={this.state.calenderFocused}
          onFocusChange ={this.onFocusChange}
          numberOfMonths ={1}
          isOutsideRange = {()=> false }    //Over riding the code and alowing user to pik date in the past 
         />
          <textarea placeholder='Add a note for your expense (optional)'
          value={this.state.note} onChange={this.onNoteChange} >
          </textarea>
          <button>Add Expense</button>
          </form>
            </div>
        )
    }
}
//Regulare expressions
//https://regex101.com/

//We passed data out of Expenseform, we did that by calling a prop that gets passed in from the parent  AddExpensePages, we did this becouse we want to reuse the form in  on addExpensePage and on the Edit ExpensePage, bpoth dispatch different actions, this is why we have abstracted that part away from expenseForm
// this.props.onSubmitProp({
//     description: this.state.description,
//     amount:parseFloat(this.state.amount,10)*100, //amount currently is a string ex'123.45'. parsFloat is like parsInt, parsFloat however keeps dessimals in place, passing in our string amount:parseFloat(this.state.amount) and get it over to a real number, providing the base of 10, amount:parseFloat(this.state.amount,10)*100 ,*100 becouse we are working in cents
//     createdAt:this.state.createdAt.valueOf(), //This is currently a moment object, there is a moment method we can use to get the time stamp back,(JavaScript works in milliseconds  
//     //Unix Timestamp (milliseconds) 1.0.0+edit moment().valueOf();
//    note: this.state.note
// });