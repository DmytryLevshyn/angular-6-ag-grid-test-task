import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'proj-start',
    loadChildren: './start-screen/start-screen.module#StartScreenModule'
    // redirectTo: 'wrong-url-handler',
    // pathMatch: 'full'
  },
  {
    path: 'proj-grid',
    loadChildren: './grid/grid.module#GridModule'
    // redirectTo: 'wrong-url-handler',
    // pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'proj-grid/grid',
    // pathMatch: 'full'
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
