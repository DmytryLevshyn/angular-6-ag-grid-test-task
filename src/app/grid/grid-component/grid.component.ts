import { Component, OnInit, ViewChild } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { ActivatedRoute } from '@angular/router';
import { take, map, filter, switchMap, flatMap } from 'rxjs/operators';
import { ThumbnailsTemplateComponent } from '../cell-tempate-components';
import { PublishedAtTemplateComponent } from '../cell-tempate-components';
import { TitleTemplateComponent } from '../cell-tempate-components';
import { DesriptionTemplateComponent } from '../cell-tempate-components'


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  toggle = false;
  totalCount: number = 0;
  selectedCount: number = 0;
  selection: boolean = false;
  gridApi;
  gridColumnApi;

  switchSelection() {
    this.selection = !this.selection;
    this.thumbnails.checkboxSelection = this.selection;
    this.thumbnails.headerCheckboxSelection = this.selection;
    const columnDefs = [this.thumbnails, this.publishedAt, this.title, this.description];
    this.gridApi.setColumnDefs(columnDefs);
  }

  thumbnails = {
    headerName: '',
    field: 'thumbnails',
    cellRenderer: 'thumbnailsRenderer',
    autoHeight: true,
    checkboxSelection: this.selection,
    headerCheckboxSelection: this.selection,
    width: 250
  };

  publishedAt = {
    headerName: 'Published on',
    field: 'publishedAt',
    cellRenderer: 'publishedAtRenderer',
    width: 250
  }

  title = {
    headerName: 'Video Title',
    field: 'title',
    cellRenderer: 'titleRenderer',
    width: 250
  };

  description = {
    headerName: 'Description',
    field: 'description',
    cellRenderer: 'desriptionRenderer',
    width: 250
  }


  @ViewChild('myGrid') myGrid: AgGridAngular;

  gridOptions = {

    frameworkComponents: {
      thumbnailsRenderer: ThumbnailsTemplateComponent,
      publishedAtRenderer: PublishedAtTemplateComponent,
      titleRenderer: TitleTemplateComponent,
      desriptionRenderer: DesriptionTemplateComponent
    },

    columnDefs: [
      this.thumbnails,
      this.publishedAt,
      this.title,
      this.description,
    ],

    onSelectionChanged: (e: Event) => {
      const selectedRaws = this.myGrid.api.getSelectedRows();
      this.selectedCount = selectedRaws.length;
    },

    allowContextMenuWithControlKey: true,
    getContextMenuItems: this.getContextMenuItems
  }

  getContextMenuItems(params){
    return[
      {
        name: 'one',
        action: () => {console.log('one')}
      },
      {
        name: 'two',
        action: () => {console.log('two')}
      }
    ]
  }

  modules = AllCommunityModules;

  ngOnInit() {
    this.activatedRoute.data.pipe(
      take(1)
    )
      .subscribe(res => {
        console.log('videodata');
        console.log(res);
        (this.gridOptions as any).rowData = [...(res.videoData as any)];
        this.totalCount = (this.gridOptions as any).rowData.length;
      })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
