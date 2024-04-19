import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data = [
    { id: 0, name: 'kapil', email: 'y@rosamond.me' },
    { id: 1, name: 'fox', email: 's@rosamond.me' },
    { id: 2, name: 'helov', email: 'f@rosamond.me' },
  ]
  constructor(private http: HttpClient) { }

  ngOnInit() {

    // from(this.data).pipe(
    //   filter((val: any) => val.name.length > 3)
    // ).subscribe((res) => {
    //   console.log(res);
    // })

    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((res: any) => res.filter((val: any) => val.id <5))
    ).subscribe((data: any) => {
      console.log(data);
    })

  }



}
