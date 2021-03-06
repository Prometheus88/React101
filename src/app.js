
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import { Provider } from 'react-redux';
import AppRouter from './routers/approuter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2500}));
store.dispatch(addExpense({ description: 'Milk', amount: 9500}));


setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

setTimeout(() => {
  store.dispatch(setTextFilter('Milk'));
}, 1500)

store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (

  <Provider store={store}>
    <AppRouter />
  </Provider>

)


ReactDOM.render(jsx, document.getElementById('app'));
