import uuid from 'uuid';

//Action generators

//ADD_EXPENSE
//This is a action generator
//description and note are provided by the user, if thre isnt one an empty string is set to default
// ADD_EXPENSE
export const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  });
  
  //Action generator, function that takes input returns action object
  // destructuring the object pased in and pulling of the id so it can be used in the reducer
  // REMOVE_EXPENSE
  export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  // EDIT_EXPENSE, action generator function
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
  