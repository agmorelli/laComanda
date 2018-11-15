import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';
 
@Component({
  selector: 'app-chart',
  template: `
    <button (click)="add()">Add Point!</button>
    <div [chart]="chart"></div>
  `
})
export class ChartComponent {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Linea de abajo',
        data: [1 ,2, 3] 
       
      }
    ]
  });
 
  // add point to chart serie
  add() {
    //this.chart.addPoint(Math.floor(Math.random() * 10));

    this.chart.addPoint(1);
  }
}