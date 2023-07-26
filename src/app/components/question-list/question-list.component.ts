import { Component, OnInit } from '@angular/core';
import { question, category } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  questions: question[] = [];
  selected = 'All';
  Categories: category[] = [];
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getSubjectCategory().subscribe((data) => {
      this.Categories = [{ value: 'all', viewValue: 'All' }, ...data];
    });
    this.questionService.getQuestion().subscribe((response) => {
      this.questions = response;
    });
  }

  getQuestionByCategory(category: string) {
    this.questionService
      .getQuestionByCategory(category)
      .subscribe((response) => {
        this.questions = response;
      });
  }
}
