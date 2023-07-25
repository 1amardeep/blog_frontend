import { Component, OnInit } from '@angular/core';
import { blog, category } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: blog[] = [];
  selected = 'All';
  Categories: category[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'html', viewValue: 'HTML' },
    { value: 'typescript', viewValue: 'TypeScript' },
    { value: 'css', viewValue: 'CSS' },
    { value: 'angular', viewValue: 'Angular' },
    { value: 'react', viewValue: 'React' },
    { value: 'vue', viewValue: 'Vue' },
    { value: 'algorithm', viewValue: 'Algorithm' },
  ];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlog().subscribe((response) => {
      this.blogs = response;
    });
  }

  getBlogByCategory(category: string) {
    this.blogService.getBlogByCategory(category).subscribe((response) => {
      this.blogs = response;
    });
  }
}
