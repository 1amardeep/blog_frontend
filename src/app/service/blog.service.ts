import { Injectable } from '@angular/core';
import { blog } from '../models/blog';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  addBlog(blog: blog): Observable<blog> {
    return this.http.post<blog>(`${apiUrl}/post`, {
      title: blog.title,
      description: blog.description,
      category: blog.category,
    });
  }

  getBlog(): Observable<blog[]> {
    return this.http.get<blog[]>(`${apiUrl}/getAllBlog`);
  }
}
