import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  @ViewChild('heartChart', {static: true}) canvas;
  chart:any;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
        type: 'bar',
        data:  {
          datasets: [{
          label: 'heart rate',
          data: [180, 160, 150, 120, 80, 65, 77, 92],
          }]
          },
    })
    this.chart.update()
  }
}
