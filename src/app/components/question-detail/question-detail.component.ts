import { Component, Input } from '@angular/core';
import { question } from 'src/app/models/question';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizerService } from 'src/app/service/domSanitizer.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
})
export class QuestionDetailComponent {
  panelOpenState = false;
  @Input() question!: question;
  @Input() Islimit!: boolean;
  isExpanded = false;

  constructor(private sanitizerService: DomSanitizerService) {}

  sanitizeHTML(content: string): SafeHtml {
    return this.sanitizerService.sanitizeHTML(content);
  }

  onExpansionPanelClicked(event: Event) {
    // Prevent the expansion of the panel
    event.preventDefault();
  }
}
