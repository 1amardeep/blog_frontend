import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContainerComponent } from './components/auth/container/container.component';
import { AuthGuard } from './service/authGuard.service';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addQuestions',
    component: QuestionFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'questionList',
    component: QuestionListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'analyticData',
    component: DoughnutChartComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
