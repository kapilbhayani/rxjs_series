import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, pipe, switchMap } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements AfterViewInit, OnInit {
  searchResult: any
  constructor(private service: CommonService) { }
  @ViewChild('test') test!: ElementRef

  ngOnInit(): void {
    this.service.getFatchData('').subscribe((res: any) => {
      this.searchResult = res
    })
  }

  ngAfterViewInit(): void {
    const data = fromEvent(this.test.nativeElement, 'keyup').pipe(
      map((data: any) => data.target.value),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((filterData: any) => this.service.getFatchData(filterData))
    ).subscribe((res: any) => {
      console.log(res);
      this.searchResult = res
    })
  }

//  Note : use form valueChanges

  // @ViewChild('searchform') searchform!: NgForm
  // ngAfterViewInit(): void {
  //   const x = this.searchform.valueChanges
  //   x?.pipe(
  //     map((res: any) => res.search),
  //     debounceTime(1000),
  //     distinctUntilChanged(),
  //     switchMap((data: any) => this.service.getFatchData(data)),
  //   ).subscribe((res: any) => {
  //     this.searchResult = res
  //     console.log(res);
  //   })
  // }

}
