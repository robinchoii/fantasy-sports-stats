import { createStore } from 'redux';
import rootReducers from './reducers/index';

const store = createStore(rootReducers, {wr:[]})

function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload
  }
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))

export default store;
