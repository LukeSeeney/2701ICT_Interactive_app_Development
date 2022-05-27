import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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
          labels:[1,2,3,4,5,6,7,8],
          datasets: [{
            data: [180, 160, 150, 120, 80, 65, 77, 92],
            label: 'heart chart',
            barThickness: 6,
            maxBarThickness: 8
          }]
          },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    console.log(this.chart.data.datasets[0].data)
  }
}
