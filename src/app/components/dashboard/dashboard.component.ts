import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  show: boolean = false;
  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((bool) => {
      if (!bool) {
        this.show = true;
      }
    });
  }
}
