import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class DomSanitizerService {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHTML(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
