import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'proj-start',
    loadChildren: './start-screen/start-screen.module#StartScreenModule'
  },
  {
    path: 'proj-grid',
    loadChildren: './grid/grid.module#GridModule'
  },
  {
    path: '**',
    redirectTo: 'proj-grid/grid',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
