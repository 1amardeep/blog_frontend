import { Component, Input } from '@angular/core';
import { AnalyticsData } from 'src/app/models/question';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent {
  @Input() chartData!: AnalyticsData;
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

  ngAfterViewInit(): void {
    const { count, category, color } = {
      count: this.chartData.results.map((item) => item.count),
      category: this.chartData.results.map((item) => item.category),
      color: this.chartData.results.map((item) => item.color),
    };
    this.createChart(count, category, color);
    this.totalQuestion = this.chartData.totalCount;
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
