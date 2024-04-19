import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('from') from!: ElementRef
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    fromEvent(this.from.nativeElement, 'keyup').subscribe((res: any) => {
      console.log(res.target.value)
    })
  }

}
