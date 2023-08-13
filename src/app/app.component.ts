import { Component } from '@angular/core';
import { LoadingService } from './service/spinner.service';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public loadingService: LoadingService,
    public questionService: QuestionService
  ) {}
}
