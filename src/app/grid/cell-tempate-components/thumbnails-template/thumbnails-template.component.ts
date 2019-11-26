import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-thumbnails-template',
  templateUrl: './thumbnails-template.component.html',
  styleUrls: ['./thumbnails-template.component.scss']
})
export class ThumbnailsTemplateComponent implements ICellRendererAngularComp {

  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
  }

  refresh(): boolean {
    return false;
  }

}