import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { AnalyticsData, category } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public chart: any;
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: { data: number[] }[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getAnalyticsData().subscribe((data) => {
      const { count, category, color } = {
        count: data.map((item) => item.count),
        category: data.map((item) => item.category),
        color: data.map((item) => item.color),
      };
      this.createChart(count, category, color);
    });
  }

  createChart(count: number[], category: string[], color: string[]) {
    this.pieChartDatasets = [{ data: count }];
    this.pieChartLabels = category;
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
