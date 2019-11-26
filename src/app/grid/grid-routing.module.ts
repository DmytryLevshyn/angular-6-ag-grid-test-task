import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid-component/grid.component';
import { VideoDataResolver } from '../resolvers/videoData.resolver'

const routes: Routes = [
  {
    path: 'grid',
    component: GridComponent,
    resolve: {
      videoData: VideoDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
