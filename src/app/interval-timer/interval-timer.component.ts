import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {
 

  ngOnInit() {
    // let x = interval(1000) //intrval
    let x = timer(5000,1000) //timer(delay,interval)
    
   x.subscribe((res: any) => {
     console.log(res);
     
    })
  }

}
