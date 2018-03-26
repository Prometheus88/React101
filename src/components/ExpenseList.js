import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpensesListItem';



const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
    {props.expenses.length}
    {props.filters.text}
  </div>
)

const mapStateToProps = (state) => {
  return{
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
