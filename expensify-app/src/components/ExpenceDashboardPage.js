import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenceDashboardPage =()=>{
    return(<div>
        <ExpenseListFilters/>
        <ExpenseList/>
        </div>)
 };

 export default ExpenceDashboardPage;