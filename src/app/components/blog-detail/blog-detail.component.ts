import { Component, Input } from '@angular/core';
import { blog } from 'src/app/models/blog';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizerService } from 'src/app/service/domSanitizer.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent {
  panelOpenState = false;
  @Input() blog!: blog;

  constructor(private sanitizerService: DomSanitizerService) {}

  sanitizeHTML(content: string): SafeHtml {
    return this.sanitizerService.sanitizeHTML(content);
  }
}
