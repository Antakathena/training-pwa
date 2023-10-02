import { Component, Fragment, h, Prop } from '@stencil/core';
import * as agCharts from 'ag-charts-community';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  data = [
    {
      quarter: 'Q1',
      spending: 700,
    },
    {
      quarter: 'Q2',
      spending: 600,
    },
    {
      quarter: 'Q3',
      spending: 560,
    },
    {
      quarter: 'Q4',
      spending: 450,
    },
  ];

  private createCharts = agCharts.AgChart.create({
  data: this.data,
  container: document.getElementById('myChart'),
  series: [{
    xKey: 'quarter',
    yKey: 'spending',
  }],
});

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/notice"></ion-back-button>
            </ion-buttons>
            <ion-title>Profile: {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding">
          <div>plopplopplop</div>
          <div>
            {this.createCharts}
          </div>
          <ion-card>
            <ion-card-header>
              <h1>
                {this.normalize(this.name)}
              </h1>
            </ion-card-header>
            <ion-card-content>
              <p>
                This name is passed in through a route param!
              </p>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }

}
