import {createStore} from 'redux';
//{incrementBy =1} Meens if there is an object provided but no incrementBy incrementBy gets set to 1
//= {} Meens if there is no object, there will be an emty one provided
const incrementCount = ({incrementBy =1} = {})=>({
    type:'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount =({decrementBy=1}={})=>({
      type:'DECREMENT',
      decrementBy:decrementBy
});

const resetCount = ()=>({type:'RESET'});

const setCount = ({count})=>({ 
    type:'SET',
    count
});
/////////////Reducers///////////////////
//1. Reducers are pure functions (pure functions the output is only determend by the input)
//What the reducer function returns is only determined by what gets passed in, 
//it doesn't use enything outside of the function scope, nore does it change anything outside of the function scope
///2.Nerver changing state or action, insted returning an object that changes the state
const countReducer = 
(state={count:0},action)=>{
    switch(action.type){
        
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            };    
        case 'RESET':
            return{
                count: 0
            };  

         default:
             return state; 
        }  
        }

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});                                                                 

store.dispatch(incrementCount({incrementBy:5}));


store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy :10}));

store.dispatch(setCount({count:101}));
   
///////////////////




