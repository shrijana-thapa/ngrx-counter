import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from '../header';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',component:Header
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,RouterModule],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
