import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map, of, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    ).subscribe((res: any) => {
      const v = from(res)
      v.pipe(
        pluck('email')
      ).subscribe((val: any) => {
        console.log(val);
      })
    })
  }

}
