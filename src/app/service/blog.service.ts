import { Injectable } from '@angular/core';
import { blog } from '../models/blog';
import api from '../interceptors/http';
import { Observable, from } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private bloggingList: blog[] = [];

  constructor() {}

  addBlog(blog: blog): Observable<AxiosResponse<any, any>> {
    return from(
      api.post('/post', {
        title: blog.title,
        description: blog.description,
      })
    );
  }

  getBlog(): Observable<AxiosResponse<any, any>> {
    return from(api.get('/getAllBlog'));
  }
}
