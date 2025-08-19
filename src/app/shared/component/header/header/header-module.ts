import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing-module';
import { RouterLink, RouterModule } from '@angular/router';
import { Header } from '../header';


@NgModule({
  declarations: [Header],
  imports: [
    CommonModule,
    HeaderRoutingModule,RouterLink,RouterModule
  ],
  exports:[Header]
})
export class HeaderModule { }
