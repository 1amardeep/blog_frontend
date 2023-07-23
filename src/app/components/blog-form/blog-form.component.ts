import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      // Perform actions with the form data here
      let blog: blog = {
        title: this.formGroup.value.title,
        description: this.formGroup.value.description,
        date: new Date(),
      };
      this.blogService.addBlog(blog).subscribe((response) => {
        this.router.navigate(['/blog']);
      });
    }
  }
}
