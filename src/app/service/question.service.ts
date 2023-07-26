import { Injectable } from '@angular/core';
import { question, category } from '../models/question';
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

  getQuestionByCategory(Category: string): Observable<question[]> {
    return this.http.get<question[]>(
      `${apiUrl}/getQuestionByCategory/${Category}`
    );
  }

  getSubjectCategory(): Observable<category[]> {
    return this.http.get<category[]>(`${apiUrl}/getSubjectCategory`);
  }
}
