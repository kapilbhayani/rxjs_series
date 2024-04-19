import { Component } from '@angular/core';
import { interval, of, skip, skipLast, skipUntil, timer } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent {
  x = interval(1000);
  y = timer(4000);

  ngOnInit() {
    this.x.pipe(
      // skip(3)
      // skipLast(4)
      // skipUntil(this.y)
    ).subscribe((res: any) => {
      console.log(res);
    })
  }
}

// skip oprator agad ni value remove karse
// skipLast oprator pachad ni value remove karse
// skipUntil oprator timer ma jetli value api hase ena pachi ni value apse