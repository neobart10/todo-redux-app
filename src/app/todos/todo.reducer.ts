import {createReducer, on} from '@ngrx/store';
import {create, remove, edit, toggle, toggleAll, clearComplete} from './todo.actions';
import {Todo} from './models/todo.model';


export const initialState: Todo[] = [
  new Todo('safe de word'),
  new Todo('won Tanohs'),
  new Todo('buy de iroman'),
  new Todo('capitan america'),
];

const _todoReducer = createReducer(initialState,
  on(create, (state, { text }) => [...state, new Todo( text )]),

  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }  else {
        return todo;
      }
    });
  }),

  on(edit, (state, { id, text }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          text
        };
      }  else {
        return todo;
      }
    });
  }),

  on(remove, (state, { id }) =>  state.filter( todo => todo.id !== id )),

  on(toggleAll, (state, { completed }) => {
    return state.map( todo => {
        return {
          ...todo,
          completed
        };
    });
  }),

  on(clearComplete, (state) => state.filter( todo => !todo.completed )),
);


export function todoReducer( state, action ) {
  return _todoReducer(state, action);
}
