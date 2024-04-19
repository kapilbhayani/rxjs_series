import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';
  public response: any

  constructor(private httpClient: HttpClient) { }

  async fetchData() {
    this.response = '';
    console.log('first call');
  
    this.response = await this.httpClient
      .get<any>(this.apiURL)
      .pipe(delay(3000))
      .toPromise();
      
    console.log('second call');
  }

  ngOnInit() { }
}
