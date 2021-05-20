
//This file contains no JSX so there is no need to inport react
import moment from 'moment';

// Get visible expenses
export  default(expenses, { text, sortBy, startDate, endDate }) => {//expense the compleat array that we want to filter, {distructuring the filters object}
  return expenses.filter((expense) => {//expenses.filter alowing us to return a subset of all of the expenses
    
    const createdAtMoment = moment(expense.createdAt); //creating a new moment from the value of expense.createdAt

    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') :true;  //isSameOrBefore() second argument alows us to define a unit as a string ex. 'day'
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') :true ;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
     ////expense.description.toLowerCase()----converting the string expense.description to lowercas
       //.includes(text);--------- chequing if the converted string contains the text string
    ///figur out if the expenses.discription has the text variable string inside of it
    
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => { //-1 if a should come first, 1 if b should come first
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;// if its true b comes first otherwise a commes first. This will make the most resent expence come up top
    } 
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });//sort gets called on an array and returnes the array
};

// this component returs the filtered and sorted array   1.filter();  2.sort();   Both are methods used on the array