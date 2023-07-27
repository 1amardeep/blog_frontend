import { Injectable } from '@angular/core';
import { question, category, QuestionQuery } from '../models/question';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  addQuestion(question: question): Observable<question> {
    return this.http.post<question>(`${apiUrl}/post`, {
      title: question.title,
      description: question.description,
      category: question.category,
    });
  }

  getQuestion(): Observable<question[]> {
    return this.http.get<question[]>(`${apiUrl}/getAllQuestion`);
  }

  getQuestionByFilterCategory(
    Category: QuestionQuery
  ): Observable<{ questions: question[]; count: number }> {
    return this.http.post<{ questions: question[]; count: number }>(
      `${apiUrl}/getQuestionByFilterCategory`,
      {
        ...Category,
      }
    );
  }

  getSubjectCategory(): Observable<category[]> {
    return this.http.get<category[]>(`${apiUrl}/getSubjectCategory`);
  }
}
