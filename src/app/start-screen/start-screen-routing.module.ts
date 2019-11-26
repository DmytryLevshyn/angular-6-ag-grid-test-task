import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen-component/start-screen.component';

const routes: Routes = [
  {
    path: 'start-screen',
    component: StartScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartScreenRoutingModule { }
