import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  standalone: false,
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent implements OnInit {


  constructor(private store: Store<{counter:{counter:0}}>){

  }
  ngOnInit(): void {  }
  
  onIncrement(){
this.store.dispatch(increment());
  }
  onDecrement(){
  this.store.dispatch(decrement());
  }
  
  onReset(){
  this.store.dispatch(reset());
  }

}
