import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { costumIncrement } from '../state/counter.action';

@Component({
  selector: 'app-costum-counter-input',
  standalone: false,
  templateUrl: './costum-counter-input.html',
  styleUrl: './costum-counter-input.scss'
})
export class CostumCounterInput {
value!:number;
constructor(private store:Store<{counter:counterState}>)
{}
  Add(){
  this.store.dispatch(costumIncrement({count: +this.value}));
  }

}
