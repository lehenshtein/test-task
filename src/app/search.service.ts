import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Posts} from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http: HttpClient) {}
  search(val: Posts): Observable<Object> {
    return this.http.get(`http://localhost:3000/posts?title=${val}`);
  }
}
