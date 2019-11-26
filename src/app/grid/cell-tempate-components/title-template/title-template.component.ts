import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp, AgGridAngular } from '@ag-grid-community/angular';

@Component({
  selector: 'app-title-template',
  templateUrl: './title-template.component.html',
  styleUrls: ['./title-template.component.scss']
})
export class TitleTemplateComponent implements ICellRendererAngularComp {

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
