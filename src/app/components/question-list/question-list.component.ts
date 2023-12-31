import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { question, category, QuestionQuery } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PAGE_INDEX,
  PAGE_SIZE,
  PAGE_SIZE_OPTION,
} from 'src/app/constants/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  @Input() Islimit!: boolean;

  questions: question[] = [];
  selected = 'All';
  Categories: category[] = [];
  sharedLevel!: string;

  length!: number;
  pageSize: number = PAGE_SIZE;
  pageIndex: number = PAGE_INDEX;
  pageSizeOptions = PAGE_SIZE_OPTION;
  show: boolean = false;

  constructor(
    private questionService: QuestionService,
    private paginator: MatPaginatorIntl,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.sharedLevel = params.get('id')!;
    });

    this.questionService.getSubjectCategory().subscribe((data) => {
      this.Categories = [
        { value: 'all', viewValue: 'All', color: '' },
        ...data,
      ];
    });
    this.questionService
      .getQuestionByFilterCategory(this.getQueries())
      .subscribe((response) => {
        this.questions = this.Islimit
          ? response.questions.slice(0, 5)
          : response.questions;
        this.length = response.count;
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
    this.pageIndex = PAGE_INDEX;
    this.pageSize = PAGE_SIZE;
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
      sharedLevel: this.sharedLevel,
      userId: this.questionService.getUserId()!,
    };
  }

  addQuestion() {
    this.router.navigate(['/addQuestions']);
  }
}
