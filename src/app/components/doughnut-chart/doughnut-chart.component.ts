import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent {
  public chart: any;
  public totalQuestion: number = 0;
  // Doughnut
  public doughnutChartOptions: any = {
    responsive: false,
    legend: {
      position: 'right', // Set the legend position to 'left'
    },
  };
  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets!: any;
  public doughnutChartLegend = true;
  public doughnutChartPlugins = [];
  doughnutChartColors: any[] = [
    {
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Add your custom colors here
    },
  ];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getAnalyticsData().subscribe((data) => {
      const { count, category, color } = {
        count: data.results.map((item) => item.count),
        category: data.results.map((item) => item.category),
        color: data.results.map((item) => item.color),
      };
      this.createChart(count, category, color);
      this.totalQuestion = data.totalCount;
    });
  }

  createChart(count: number[], category: string[], color: string[]) {
    this.doughnutChartDatasets = [{ data: count, backgroundColor: color }];
    this.doughnutChartLabels = category;
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
