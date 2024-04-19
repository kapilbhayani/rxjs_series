import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first, from, interval, map, of, take, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let y = interval(1000)

    y.pipe(
      take(6),
      takeLast(2)
    ).subscribe((res:any)=>{
      console.log(res);
    })
    
    // this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
     
    // ).subscribe((x: any) => {
    //   console.log(x);
    // })
 
   
  }
}
