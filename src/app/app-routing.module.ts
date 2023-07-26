import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionFormComponent,
  },
  {
    path: 'questionList',
    component: QuestionListComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
