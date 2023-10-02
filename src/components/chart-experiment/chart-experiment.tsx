import { Component, Host, JSX, h } from '@stencil/core'
import * as agCharts from 'ag-charts-community';

@Component({
  tag: 'chart-experiment',
  styleUrl: 'chart-experiment.css',
})

export class ChartExperiment {
  private chartDiv: HTMLDivElement;

/*   private agChartOptions: agCharts.AgChartOptions = {
    autoSize: true,
    navigator: {
        enabled: true,
        height: 5,
    },
    padding: {
        bottom: 10,
    },
    tooltip: {
      class: 'default-chart-tooltip',
      enabled: true,
      range: 'nearest',
    },
    legend: {
      enabled: false,
    }
  } */

  private rowData = [
    { category: "A", value: 60 },
    { category: "B", value: 33 },
    { category: "C", value: 22 },
    { category: "D", value: 40 },
    { category: "E", value: 52 }
  ]

  componentDidLoad() {
    console.log('componentDidLoad');
    this.createChart();
  }

  createChart() {
      console.log('createChart')
      this.chartDiv = document.querySelector('#myChart');
      agCharts.AgChart.create({
        autoSize: true,
        navigator: {
            enabled: true,
            height: 5,
        },
        padding: {
            bottom: 10,
        },
        tooltip: {
          class: 'default-chart-tooltip',
          enabled: true,
          range: 'nearest',
        },
        legend: {
          enabled: false,
        },
        container: this.chartDiv,
        data: this.rowData,
        series: [{
          type: 'column',
          xKey: 'category',
          yKey: 'value',
        }],
      });
    }

/*   console.log('createChart')
  this.chartDiv = document.querySelector('#myChart');

  this.agChartOptions = {
    ...this. agChartOptions,
    container: this.chartDiv,
    data: this.rowData,
    series: [{
      type: 'area',
      xKey: 'category',
      yKey: 'value',
    }]
  }
  agCharts.AgChart.create(this.agChartOptions); */

  render(): JSX.Element {
    return (
        <Host>
          <section>
                  <p>Chart experiment :</p>
                  <p class="precision">Graph :</p>
                  <div id="myChart" ref={ el => this.chartDiv = el } />
          </section>
        </Host>
    );
}
}
