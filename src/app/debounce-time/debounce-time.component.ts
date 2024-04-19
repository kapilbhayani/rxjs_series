import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('input') input !: ElementRef

  ngOnInit() { }

  ngAfterViewInit(): void {
     fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((res: any) => res.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(
      (res: any) => {
        console.log(res);
      }
    )
  }
}
