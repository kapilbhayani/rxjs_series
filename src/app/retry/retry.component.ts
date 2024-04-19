import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, map, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  userdata: any
  fatching !: boolean
  errMesaagae !:boolean
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  fatchingData() {
    this.fatching = true
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(5),
      retryWhen(err => err.pipe(
        delay(3000),
        scan((count: any) => {
          if (count >= 4) {
            throw err
          } else {
            count = count + 1
            return count
          }
        }, 0)
      )),
     
    ).subscribe((res: any) => {
      console.log(res);
      this.userdata = res
      this.fatching = false
    },
      (err) => {
        console.log(err);
       this.errMesaagae= true
      }
    )
  }
}
