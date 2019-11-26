import { Component } from '@angular/core';
import { ICellRendererAngularComp } from "@ag-grid-community/angular";

@Component({
  selector: 'app-desription-template',
  templateUrl: './desription-template.component.html',
  styleUrls: ['./desription-template.component.scss']
})
export class DesriptionTemplateComponent implements ICellRendererAngularComp {

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
