import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((res: any) => {
        console.log('map before', res);
      }),
      map((res: any) => res.map((val: any) => val.address.zipcode)),
      tap((res: any) => {
        console.log('map after', res);
      })
    ).subscribe((data: any) => {
      console.log('final Data',data);
    })
  }

}
