import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { question, category, QuestionQuery } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  questions: question[] = [];
  selected = 'All';
  Categories: category[] = [];

  length!: number;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions = [1, 5, 10, 20];

  constructor(
    private questionService: QuestionService,
    private paginator: MatPaginatorIntl
  ) {}

  ngOnInit(): void {
    this.questionService.getSubjectCategory().subscribe((data) => {
      this.Categories = [
        { value: 'all', viewValue: 'All', color: '' },
        ...data,
      ];
    });
    this.questionService.getQuestion().subscribe((response) => {
      this.questions = response;
      this.length = response.length;
    });
  }

  ngAfterViewInit() {
    this.paginator.itemsPerPageLabel = '';
  }

  getQuestionByFilterCategory() {
    this.questionService
      .getQuestionByFilterCategory(this.getQueries())
      .subscribe((response) => {
        this.questions = response.questions;
        this.length = response.count;
      });
  }

  changeQuestionByFilterCategory() {
    this.pageIndex = 0;
    this.getQuestionByFilterCategory();
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getQuestionByFilterCategory();
  }

  getQueries(): QuestionQuery {
    return {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      category: this.selected,
    };
  }
}
