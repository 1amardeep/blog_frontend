import { Component, Input } from '@angular/core';
import { blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent {
  panelOpenState = false;
  @Input() blog!: blog;
}
