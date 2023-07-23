import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: blog[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlog().subscribe((response) => {
      this.blogs = response;
    });
  }
}
