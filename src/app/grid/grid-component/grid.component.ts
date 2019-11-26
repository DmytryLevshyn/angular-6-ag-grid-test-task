import { Component, OnInit} from '@angular/core';
import { AllCommunityModules, GridApi, ColumnApi} from '@ag-grid-community/all-modules';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ThumbnailsTemplateComponent } from '../cell-tempate-components';
import { PublishedAtTemplateComponent } from '../cell-tempate-components';
import { TitleTemplateComponent } from '../cell-tempate-components';
import { DesriptionTemplateComponent } from '../cell-tempate-components'
import { RowModel } from '../../models/row-model-interface'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  totalCount: number = 0;
  selectedCount: number = 0;
  selectionEnabled: boolean = false;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  switchSelection() {
    this.selectionEnabled = !this.selectionEnabled;
    this.thumbnails.checkboxSelection = this.selectionEnabled;
    this.thumbnails.headerCheckboxSelection = this.selectionEnabled;
    const columnDefs = [this.thumbnails, this.publishedAt, this.title, this.description];
    this.gridApi.setColumnDefs(columnDefs);
  }

  thumbnails: RowModel = {
    headerName: '',
    field: 'thumbnails',
    cellRenderer: 'thumbnailsRenderer',
    autoHeight: true,
    checkboxSelection: this.selectionEnabled,
    headerCheckboxSelection: this.selectionEnabled,
    width: 250
  };

  publishedAt: RowModel = {
    headerName: 'Published on',
    field: 'publishedAt',
    cellRenderer: 'publishedAtRenderer',
    width: 250
  }

  title: RowModel = {
    headerName: 'Video Title',
    field: 'title',
    cellRenderer: 'titleRenderer',
    width: 250
  };

  description: RowModel = {
    headerName: 'Description',
    field: 'description',
    cellRenderer: 'desriptionRenderer',
    width: 250
  }

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
      const selectedRaws = this.gridApi.getSelectedRows();
      this.selectedCount = selectedRaws.length;
    },
    allowContextMenuWithControlKey: true
  }

  modules = AllCommunityModules;

  ngOnInit() {
    this.activatedRoute.data.pipe(
      take(1)
    )
      .subscribe(res => {
        (this.gridOptions as any).rowData = [...(res.videoData as any)];
        this.totalCount = (this.gridOptions as any).rowData.length;
      })
  }

  onGridReady(params: Object) {
    this.gridApi = (params as any).api;
    this.gridColumnApi = (params as any).columnApi;
  }

}
