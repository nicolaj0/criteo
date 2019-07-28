import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private http: HttpClient) { }

  getCommits(): Observable<{items: Item[]}> {

    const options =   { headers: new HttpHeaders ({Accept : 'application/vnd.github.cloak-preview'} )};
    return this.http.get<{items: Item[]}>('https://api.github.com/search/repositories?q=topic:ruby+topic:rails&page=14', options);
  }
}


