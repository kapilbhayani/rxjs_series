import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loading: boolean = false;

constructor(private loaderService :LoaderService){
  
}
  ngOnInit(): void {
    this.loaderService.loading$.subscribe((res) => {
      this.loading = res;
    });
  }


}
