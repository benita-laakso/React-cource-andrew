import {createStore,combineReducers} from 'redux';
import uuid from 'uuid'; 
//combineReducers alows us to create multible functions and defines how ower redux aplication changes
//Having only one reduceer would create a realy long complex function, 
//hence we use combineReducers to create multible functions and combine them togetter

//ADD_EXPENSE
//This is a action generator
//description and note are provided by the user, if thre isnt one an empty string is set to default
const addExpense =(
    {
    description = ' ', 
    note = ' ',
    amount = 0, 
    createdAt = 0
} = {}
)=>({
    type:'ADD_EXPENCE',
    expence:{
        id: uuid(),
        description, 
        note,
        amount, 
        createdAt
    }
});

//Action generator, function that takes input returns action object
// destructuring the object pased in and pulling of the id so it can be used in the reducer
const removeExpense= ({id} ={})=>({///action object
    type:'REMOVE_EXPENCE',
    id
});  

///EDIT EXPENCE, action generator function
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//// SET_TEXT_FILTER

 const setTextFilter =(text = '')=>({
     type:'SET_TEXT_FILTER',
     text :text,
 });
//SORT_BY_DATE
 const sortByDate = ()=>({
    type:'SORT_BY_DATE'
 });
//SORT_BY_AMOUNT
 const sortByAmount =()=>({
     type:'SORT_BY_AMOUNT'
 }); 
//SET_START_DATE
const setStartDate = (startDate) =>({
    type:'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) =>({
    type:'SET_START_DATE',
    endDate
});


//Expence Reducer
const  expenceReducerState = [];

const expencesReducer = (state =  expenceReducerState , action)=>{
            switch (action.type){
                case 'ADD_EXPENCE'://When action type 'ADD_EXPENCE' 
                //We want to add a new expence to the array
                return [...state,  //returning a new array, starting of with copying all the items from the existig array,spreading out current expences
                        action.expence ] //adding the new item, the action.expence object
                  
                case 'REMOVE_EXPENCE':
                  return state.filter(({id})=>{ //We are working with an array of expenses, we just need the id from the individual item, here we are distructuring the individual item and pulling of th id
                      return id !== action.id;
                  }); //state does not chang state.filter returns a new array
                case 'EDIT_EXPENSE':
                    return state.map((expensItem)=>{ //going through every single item    Changing only the one whos id maches the action id, for the others returning what they currently are
                        if(expensItem.id === action.id){
                        return{   
                            ...expensItem,//grabbing al of the properties from the existing one
                            ...action.updates//only overriding the ones that user pased in
                        };
                        }else{
                            return expensItem;
                        }
                    });  
                
                    default:
                        return state 
            }
};

//Filters Reducer

const filterReducerDefaultState={
    text:' ',
    sortBy : 'date', 
    startDate: undefined, 
    endDate :undefined  
};

const filterReducer =(state = filterReducerDefaultState,action)=>{
            switch (action.type){
                case 'SET_TEXT_FILTER':
                return{
                    ...state,
                    text: action.text
                };  
                case 'SORT_BY_AMOUNT':
                return{
                    ...state, sortBy: 'amount'//copying all of the values from the old filters object, seting sortBy to the string 'amount'
                };
                case 'SORT_BY_DATE':
                   return {
                    ...state, sortBy: 'date'
                   };
                case 'SET_START_DATE':
                    return{
                   ...state, startDate: action.startDate       
                    };   
                case 'SET_END_DATE':
                    return{
                    ...state,
                    endDate: action.endDate   //New end date is available on action.endDate 
                    };    
                default:
                    return state;
            }
};


//Get visable expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate })=>{ //expense the compleat array that we want to filter, {distructuring the filters object}
    return expenses.filter((expense)=>{ //expenses.filter alowing us to return a subset of all of the expenses
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; ///this will resault in true if startDate is not equal to a number
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch =true;
       
    return startDateMatch && endDateMatch && textMatch;    
    });
};
//Task  text:re description:rent  match

//Store creation
// combineReducers() taket an object as its argumnt
//on the object we provide key value pairs, 
//the key is the root state name,the value is the reducer that is suposed to manage that

const store = createStore(
    combineReducers({
        expenses:expencesReducer, //root state name we are giving to the reducer:reducer that manages that
        filters:filterReducer
    })
);

//making call to store.subscribe to trak changes
store.subscribe(()=>{
    const state = store.getState(); //the entire state, the entire expenses array and all filters
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);// setting visibleExpenses to tsthe return value of getVisibleExpenses()—
    console.log(visibleExpenses);
});

//addExpense gets dispathed to both redusers, in the reduser(expencesReducer) where we want to use it we create a  case type:'ADD_EXPENCE'

const expenseOne = store.dispatch(addExpense({
    description:'Rent',
    amount:100,
    createdAt:1000
}));

//if you dispatch an action object it comes back as the return value
//We are storing the object in a variable

const expenceTwo = store.dispatch(addExpense({
    description:'food',
    amount:300,
    createdAt:-1000
}));

// store.dispatch(removeExpense({id: expenseOne.expence.id}));

// store.dispatch(editExpense(expenceTwo.expence.id,{amount:500}));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());


 store.dispatch(setStartDate(125));

// store.dispatch(setStartDate());

// store.dispatch(setStartDate(1250));


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
