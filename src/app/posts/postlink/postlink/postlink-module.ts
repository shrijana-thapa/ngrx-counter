import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostlinkRoutingModule } from './postlink-routing-module';
import { Postlink } from '../postlink';


@NgModule({
  declarations: [Postlink],
  imports: [
    CommonModule,
    PostlinkRoutingModule
  ]
})
export class PostlinkModule { }
