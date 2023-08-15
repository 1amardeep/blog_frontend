import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { question, category } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  formGroup!: FormGroup;

  Categories: category[] = [];
  description: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questionService.getSubjectCategory().subscribe((data) => {
      this.Categories = data;
    });
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      sharedLevel: ['public', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      // Perform actions with the form data here
      let color = this.Categories.find(
        (obj) => obj.viewValue === this.formGroup.value.category
      )?.color!;
      let question: question = {
        title: this.formGroup.value.title,
        description: this.formGroup.value.description,
        category: this.formGroup.value.category,
        color,
        date: new Date(),
        userId: this.questionService.getUserId()!,
        sharedLevel: this.formGroup.value.sharedLevel,
      };
      this.questionService.addQuestion(question).subscribe(() => {
        this.router.navigate(['/questionList']);
      });
    }
  }
}
