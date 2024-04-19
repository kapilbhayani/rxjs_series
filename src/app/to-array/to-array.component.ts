import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, takeLast, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  sub !: Subscription

  ngOnInit() {
    let x = interval(1000)

    this.sub = x.pipe(
      take(6),
      toArray()
    ).subscribe((res: any) => {
      console.log(res);
    })
  }

}

// toArray() value ne array ma convert kare 