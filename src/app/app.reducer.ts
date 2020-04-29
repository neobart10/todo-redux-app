import {Todo} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {filtersValid} from './filter/filter.actions';
import {filterReducer} from './filter/filter.reducer';


export interface AppState {
  todos: Todo[],
  filter: filtersValid
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
