import { Component, OnInit } from '@angular/core';
import { interval, of, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skipwhile',
  templateUrl: './skipwhile.component.html',
  styleUrls: ['./skipwhile.component.css']
})
export class SkipwhileComponent implements OnInit {
  x = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  ngOnInit() {
    this.x.pipe(
      skipWhile(data => data <= 5)
    ).subscribe((res: any) => {
      console.log(res);

    })
  }

}

// skipwhile all data mathi 5 karta small data ne skip karse and baki ni value apse