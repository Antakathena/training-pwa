import { Component, Fragment, h } from '@stencil/core'
import * as agGrid from 'ag-grid-community';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  private gridElement: HTMLDivElement;
  private gridOptions: agGrid.GridOptions = {
  columnDefs: [
    { headerName: "Category", field: "category" },
    { headerName: "Value", field: "value" }
  ],
  defaultColDef: {
    minWidth: 120,
    resizable: true,
    sortable: true,
    filter: true,
    hide: false,
  },
  rowData: [
    { category: "Ananas", value: 10 },
    { category: "Blette", value: 20 },
    { category: "Concombre", value: 15 },
    { category: "Danone", value: 40 },
    { category: "Epinard", value: 522 },
  ]
};

  componentDidLoad() {
    console.log('componentDidLoad');
    this.createGrid();
  }

  createGrid() {
    console.log('createGrid')
    console.log('gridOptions', this.gridOptions);

    this.gridElement = document.querySelector("#myGrid");
    this.gridElement.classList.add('ag-theme-alpine');

    new agGrid.Grid(this.gridElement, this.gridOptions);

    console.log('gridCreated');
  }

  render() {
    console.log('Render');
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar class="toolbar">
            <ion-title>Grid</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="invisible">
            <p>Let's try navigating with ionic router!</p>
            <ion-list>
              <ion-item href="/tab/notice">
                <ion-label>Notice Page (/tab/notice)</ion-label>
              </ion-item>
              <ion-item href="/profile/ionic">
                <ion-label>Profile Page (/profile/ionic)</ion-label>
              </ion-item>
            </ion-list>
        </div>
        <chart-experiment></chart-experiment>
        <section>
                <p>Some Grid with AG-grid</p>
                <p class="precision">Grid :</p>
                <div id="myGrid" class="ag-theme-alpine"></div>
        </section>
        </ion-content>

      </Fragment>
    )
  }
}
