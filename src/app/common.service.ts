import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { search } from './model/search.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getFatchData(searchterm: any) { 
    return this.http.get('https://jsonplaceholder.typicode.com/users' + '?q=' + searchterm)
  }
}
