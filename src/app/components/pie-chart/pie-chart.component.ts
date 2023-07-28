import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AnalyticsData, category } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public chart: any;

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
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: category,
        datasets: [
          {
            label: 'My Question Set',
            data: count,
            backgroundColor: color,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
