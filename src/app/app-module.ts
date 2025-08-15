import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CounterComponent } from './counter/counter.component/counter.component';
import { CounterButtonComponent } from './counter/counter-button.component/counter-button.component';
import { CounterOutputComponent } from './counter/counter-output.component/counter-output.component';
import { StoreModule } from '@ngrx/store';
import{counterReducer} from './counter/state/counter.reducer'

@NgModule({
  declarations: [
    App,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
