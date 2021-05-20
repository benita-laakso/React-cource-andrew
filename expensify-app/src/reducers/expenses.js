const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE'://When action type 'ADD_EXPENCE' 
      //We want to add a new expence to the array
        return [
          ...state,//returning a new array, starting of with copying all the items from the existig array,spreading out current expences
          action.expense
        ];//adding the new item, the action.expence object
      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);//We are working with an array of expenses, we just need the id from the individual item, here we are distructuring the individual item and pulling of th id 
       //state does not chang state.filter returns a new array
        case 'EDIT_EXPENSE':
        return state.map((expense) => {//going through every single item    Changing only the one whos id maches the action id, for the others returning what they currently are
          if (expense.id === action.id) {
            return {
              ...expense,//grabbing al of the properties from the existing one
              ...action.updates//only overriding the ones that user pased in
            };
          } else {
            return expense;
          };
        });
      default:
        return state;
    }
  };
  
