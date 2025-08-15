import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit,OnDestroy{
 
  constructor(private store:Store<{counter:counterState}>){}
  counter!:number;
  counterSubscription!:Subscription;

  ngOnInit(): void {

  this.counterSubscription=this.store.select('counter').subscribe(data=>{
    this.counter=data.counter
  });
  }

  ngOnDestroy(): void {
     if(this.counterSubscription){
      this.counterSubscription.unsubscribe();

  }}



}
