import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';

@Component({
  selector: 'app-published-at-template',
  templateUrl: './published-at-template.component.html',
  styleUrls: ['./published-at-template.component.scss']
})
export class PublishedAtTemplateComponent implements ICellRendererAngularComp {

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
