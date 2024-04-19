import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, from, interval, map, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private userData: any
// map operater example
  constructor(private http: HttpClient) {
    // debugger
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((val:any)=>val.map((res:any,index:any)=>{
      if(res.name == "Ervin Howell"){
        res.name = 'kapil'
      }
      return res
      })),
    
    ).subscribe((res: any) => {
      console.log(res);
    })
  }

  ngOnInit() {
  }

  
}
