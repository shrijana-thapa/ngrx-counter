import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { costumIncrement, changeText } from '../state/counter.action';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-costum-counter-input',
  standalone: false,
  templateUrl: './costum-counter-input.html',
  styleUrl: './costum-counter-input.scss'
})
export class CostumCounterInput implements OnInit{
value!:number;
channelName$!:Observable<string>;
constructor(private store:Store<{counter:counterState}>)
{}
ngOnInit(): void {
  this.channelName$=this.store.select(getChannelName);

}
  Add(){
  this.store.dispatch(costumIncrement({count: +this.value}));
  }
  onChangeText(){
    this.store.dispatch(changeText());
  }

}
