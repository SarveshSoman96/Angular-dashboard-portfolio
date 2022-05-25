import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);

    const myChart = new Chart("myBarChart", {
        type: 'bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                label: '',
                data: [5, 8, 11, 4, 2, 7],
                backgroundColor: [
                    'rgb(255, 255, 255)'
                ],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const myChart2 = new Chart("myLineChart", {
      type: 'line',
      data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S'],
          datasets: [{
              label: '',
              data: [8, 9, 15, 12, 10, 13],
              borderColor: 
                  'rgb(255, 255, 255)',
                borderWidth: 3,
          }],
          
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: false
              }
          }
      }
  });

  }

}
