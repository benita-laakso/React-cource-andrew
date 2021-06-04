import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', ()=>{
    const state = filtersReducer(undefined,{type:'@@INIT'});//calling the filtersReducer, passing in nessecery arguments, (1st current state, 2nd our action object)
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate : moment().startOf('month'),
        endDate: moment().endOf('month')
    });//setting up the object gthat we are hoping will come back
});


test('should set sortBy to amount',()=>{
    const state =  filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
});
test('should set sortBy to date', () =>
{
    const currentState = {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount', // If it was already 'date' we would not be confirming that dispatching the action has any effect

    }
    const action ={type:'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date'); // Here we expect the 'amount' to change to 'date' and we are making an asertion about that
});

test('should set text filter', ()=>{

    const text ='this is my filter';
    const action = {
        type:'SET_TEXT_FILTER',
        text:text
    };
    const state = filtersReducer(undefined,action);//calling the filtersReduser and pasing in undefined for the current state
    expect(state.text).toBe(text);
});

test('should set startDate filter',() =>{
    const startDate = moment();
    const action ={
       type: 'SET_START_DATE',
       startDate
    };
    const state= filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);  //we are commparing two moment instances that afe objects 
});
test('should set endDate filter',() =>{
    const endDate = moment();
    const action ={
       type: 'SET_END_DATE',
       endDate
    };
    const state= filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);  //we are commparing two moment instances that afe objects 
});