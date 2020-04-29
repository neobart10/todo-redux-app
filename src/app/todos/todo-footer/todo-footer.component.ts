import { Component, OnInit } from '@angular/core';
import * as actions from '../../filter/filter.actions';
import * as actionsTodo from '../../todos/todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filterCurrent: actions.filtersValid = 'all';
  filters: actions.filtersValid[] = ['all', 'completed', 'pending'];

  pending = 0;

  constructor( private store: Store<AppState>  ) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filterCurrent = state.filter;
      this.pending = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  setFilter(filter: actions.filtersValid) {
    this.store.dispatch( actions.setFilter({filter}) );
  }

  clearCompleted() {
    this.store.dispatch( actionsTodo.clearComplete() );
  }

}
