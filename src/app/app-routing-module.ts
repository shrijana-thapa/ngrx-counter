import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component/counter.component';
import { Header } from './shared/component/header/header';
import { Home } from './homecomponent/home/home';
import { Postlink } from './posts/postlink/postlink';

const routes: Routes = [
  {
    path:'counter',component:CounterComponent
  },

  {
  path:'',component:Home
  },
  {
    path:'posts',component:Postlink
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
