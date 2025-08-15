import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
 
  constructor(private store:Store<{counter:counterState}>){}
   Counter$!:Observable<{counter:number}>;

  ngOnInit(): void {

  this.Counter$=this.store.select('counter');
  }

}




