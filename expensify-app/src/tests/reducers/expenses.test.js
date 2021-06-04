import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should sett default state', ()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});
test('should remove expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id //setting it up to be one of the real ids
    }; 
    const state = expensesReducer(expenses,action);//passin in (the expenses array is owr test data, the action object) .There should be a new array comming back, with two items, as we removed the midle one
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1' //setting it up to be one of the real ids
    }; 
    const state = expensesReducer(expenses,action);//passing in (the expenses array as our test data, the action object) .There should be a new array comming back, with two items, as we removed the midle one
    expect(state).toEqual(expenses);//we are expecting it to be an array that has been onChanged
});

test('should add an expense', ()=>{
    const expense ={
        id:'109',
        description:'Laptop',
        note :'',
        createdAt:20000,
        amount: 29500,
    }
    const action ={
        type:'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);//calling it with the expenses fixture data,passing in the action object two lines upp
    expect(state).toEqual([...expenses,expense]);//spreading out all of the expense items on the expenses array, adding on the one new items, the expence items a few lines up. If the new ones has the three old ones folowed by the new one, then everything went well 
});

test('should edit an expence', ()=>{
//Defining the edit and action objects
const amount = 122000
const action = {
    type: 'EDIT_EXPENSE',
    id:expenses[1].id, //grabbing our data from the existing array in the fixtures file
    updates: {
        amount
    }//updates object
};
    const state = expensesReducer(expenses, action);// (expenses=Pasing in the expenses fixtures data, action= passing in our changes)
    expect(state[1].amount).toBe(amount);//we want to assert that the second item has a difrent amount value. Checking that the items amount value is equalTo(the amount we just defined in this function)
});


test('should not edit an expence if expence not found', ()=>{
    //Defining the edit and action objects
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id:'-!', 
        updates: {
            amount
        }
    };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });