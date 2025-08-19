import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CounterComponent } from './counter/counter.component/counter.component';
import { CounterButtonComponent } from './counter/counter-button.component/counter-button.component';
import { CounterOutputComponent } from './counter/counter-output.component/counter-output.component';
import { StoreModule } from '@ngrx/store';
import{counterReducer} from './counter/state/counter.reducer';
import { CostumCounterInput } from './counter/costum-counter-input/costum-counter-input'
import { FormsModule } from '@angular/forms';
import { Postlink } from './posts/postlink/postlink';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './shared/component/header/header/header-module';


@NgModule({
  declarations: [
    App,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CostumCounterInput
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter:counterReducer}),
    RouterModule,HeaderModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
