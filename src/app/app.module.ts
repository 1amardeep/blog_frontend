import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/http_interceptor';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    PageNotFoundComponent,
    DashboardComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    NgChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
