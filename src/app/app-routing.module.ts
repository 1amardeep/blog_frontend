import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'addQuestions',
    component: QuestionFormComponent,
  },
  {
    path: 'questionList',
    component: QuestionListComponent,
  },
  {
    path: 'analyticData',
    component: PieChartComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
