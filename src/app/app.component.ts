import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = false;

  constructor(private loaderService :LoaderService){
  
  }
  
  ngOnInit(): void {
    this.loaderService.loading$.subscribe((res) => {
      this.loading = res;
    });
  }
  title = 'rxjs-series';
}
