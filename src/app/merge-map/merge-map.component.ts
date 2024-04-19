import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit{
  data = from(['kapil','john','romix'])
  
  ngOnInit(): void {
    this.data.pipe(
      mergeMap((res:any)=> this.getData(res)),
    ).subscribe((res:any)=>{
      console.log(res);
    })
  }

  getData(res:any){
  return of(res).pipe(delay(3000))
  }

}
