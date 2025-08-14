import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{

  @Input() counter!: number;
  ngOnInit(): void {
    
  }

}
