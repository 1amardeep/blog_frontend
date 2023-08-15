import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-link',
  templateUrl: './dashboard-link.component.html',
  styleUrls: ['./dashboard-link.component.scss'],
})
export class DashboardLinkComponent {
  @Input() privateCount!: number;
  @Input() publicCount!: number;
  @Input() totalCount!: number;
}
