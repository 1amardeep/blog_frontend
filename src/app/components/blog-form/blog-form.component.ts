import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { blog, category } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  formGroup!: FormGroup;

  Categories: category[] = [
    { value: 'html', viewValue: 'HTML' },
    { value: 'typescript', viewValue: 'TypeScript' },
    { value: 'css', viewValue: 'CSS' },
    { value: 'angular', viewValue: 'Angular' },
    { value: 'react', viewValue: 'React' },
    { value: 'vue', viewValue: 'Vue' },
    { value: 'algorithm', viewValue: 'Algorithm' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      // Perform actions with the form data here
      let blog: blog = {
        title: this.formGroup.value.title,
        description: this.formGroup.value.description,
        category: this.formGroup.value.category,
        date: new Date(),
      };
      this.blogService.addBlog(blog).subscribe((response) => {
        this.router.navigate(['/blog']);
      });
    }
  }
}
