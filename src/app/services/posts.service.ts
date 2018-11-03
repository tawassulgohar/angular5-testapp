import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsService {
  public headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  public options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`).map(res => res.json());
  }

}
