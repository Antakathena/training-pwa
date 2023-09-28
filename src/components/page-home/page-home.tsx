import { Component, Fragment, h } from '@stencil/core'
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as agCharts from 'ag-charts-community';
import * as agGrid from 'ag-grid-community';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  private gridElement: HTMLDivElement;
  private chartDiv: HTMLDivElement;
  private gridOptions: agGrid.GridOptions = {
  columnDefs: [
    { headerName: "Category", field: "category" },
    { headerName: "Value", field: "value" }
  ],
  defaultColDef: {
    minWidth: 95,
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
    this.createChart();
  }

  createGrid() {
    console.log('createGrid')
    console.log('gridOptions', this.gridOptions);

    this.gridElement = document.querySelector("#myGrid");
    this.gridElement.classList.add('ag-theme-alpine');

    //document.body.appendChild(this.gridElement);
    new agGrid.Grid(this.gridElement, this.gridOptions);

    console.log('gridCreated');
  }

  createChart() {
    console.log('createChart')
    this.chartDiv = document.querySelector('#myChart');



    agCharts.AgChart.create({
      container: this.chartDiv,
      data: [
        { category: "A", value: 10 },
        { category: "B", value: 20 },
        { category: "C", value: 15 },
        { category: "D", value: 40 }
      ],
      series: [{
        type: 'column',
        xKey: 'category',
        yKey: 'value',
      }],
    });
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
        <section>
                <p>Some Graph with AG-grid</p>
                <p class="precision">Grid :</p>
                <div id="myGrid" class="ag-theme-alpine">
                </div>
                <p class="precision">Graph :</p>
                <div id="myChart" >
                </div>
        </section>
        </ion-content>

      </Fragment>
    )
  }
}
