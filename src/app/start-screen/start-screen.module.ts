import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartScreenRoutingModule } from './start-screen-routing.module';
import { StartScreenComponent } from './start-screen-component/start-screen.component';

@NgModule({
  imports: [
    CommonModule,
    StartScreenRoutingModule,
  ],
  declarations: [StartScreenComponent]
})
export class StartScreenModule { }
