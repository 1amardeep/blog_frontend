import { Component } from '@angular/core';
import { AnalyticsData } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  chartData!: AnalyticsData;
  privateCount!: number;
  publicCount!: number;
  totalCount!: number;
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService
      .getAnalyticsData(this.questionService.getUserId())
      .subscribe((data) => {
        this.chartData = data;
        this.privateCount = data.privateCount;
        this.publicCount = data.publicCount;
        this.totalCount = data.totalCount;
      });
  }
}
