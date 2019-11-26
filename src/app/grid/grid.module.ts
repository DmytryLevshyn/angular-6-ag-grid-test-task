import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid-component/grid.component';
import { AgGridModule } from '@ag-grid-community/angular';
import * as CellTemplateComponents from './cell-tempate-components';

@NgModule({
  imports: [
    CommonModule,
    GridRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    GridComponent,
    CellTemplateComponents.ThumbnailsTemplateComponent,
    CellTemplateComponents.PublishedAtTemplateComponent,
    CellTemplateComponents.TitleTemplateComponent,
    CellTemplateComponents.DesriptionTemplateComponent
  ],
  entryComponents: [
    CellTemplateComponents.ThumbnailsTemplateComponent,
    CellTemplateComponents.PublishedAtTemplateComponent,
    CellTemplateComponents.TitleTemplateComponent,
    CellTemplateComponents.DesriptionTemplateComponent
  ]
})
export class GridModule { }
