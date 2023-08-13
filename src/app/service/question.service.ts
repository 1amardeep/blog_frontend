import { Injectable } from '@angular/core';
import {
  question,
  category,
  QuestionQuery,
  AnalyticsData,
  User,
  IResponse,
} from '../models/question';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private authTokenKey = 'authToken';

  private tokenSubject = new BehaviorSubject<boolean>(false);
  public tokenSubject$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) {}

  addQuestion(question: question): Observable<question> {
    return this.http.post<question>(`${apiUrl}/post`, {
      title: question.title,
      description: question.description,
      category: question.category,
      color: question.color,
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

  getAnalyticsData(): Observable<AnalyticsData[]> {
    return this.http.get<AnalyticsData[]>(`${apiUrl}/getAnalyticsData`);
  }

  login(data: User) {
    return this.http.post<IResponse>(`${apiUrl}/login`, data);
  }

  signUp(data: User) {
    return this.http.post<IResponse>(`${apiUrl}/signup`, data);
  }

  isAuthenticated() {
    return this.getToken() ? true : false;
  }

  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  setToken(token: string): void {
    this.tokenSubject.next(true);
    localStorage.setItem(this.authTokenKey, token);
  }

  clearToken() {
    this.tokenSubject.next(false);
    localStorage.removeItem(this.authTokenKey);
  }
}
