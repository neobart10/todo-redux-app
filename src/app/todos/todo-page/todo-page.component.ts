import { Component, OnInit } from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import * as actions from '../todo.actions';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completed = false;
  todos: Todo[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch( actions.toggleAll( { completed: this.completed } ) );

  }

}
