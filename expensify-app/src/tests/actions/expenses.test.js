import{addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should set up remove expence object',()=>{
    const action = removeExpense({id:'123abc' }); //creating a variable to store the returned action object
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
});
});

//Use .toEqual(); to compare recursively all properties of object instances 
// Use toEqual(); when comparing two objects or two arrays
//use toBe(); when comparing booleans nummbers or strings


test('should set up EditeExpense action object',()=>{
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id :'123abc',
        updates:{
            note:'new note value'
        }

    });
});

//toEqual(); Will analyse the nested objects as well  
//ex. updates:{note:'new note Value'} would fail becouse editExpense('123abc', {note: 'new note value'}); on has uppercase V one has lower v

test('Should set up add expense action object with provided values', ()=>{
    const expenseData = {
        description : 'Rent from test',
        note : 'This was last months rent',
        amount : 109500,
        createdAt : 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});

test('Should set up add expese action object with default values', ()=>{
  const action = addExpense();
  expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense: {
        id:expect.any(String),
        description :'',
        note: '',
        amount:0,
        createdAt:0,
      }
  });

});
