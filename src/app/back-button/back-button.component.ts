import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  
  backButtonClicked !: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    // when user brawser back button click that time code
    
    this.router.events.subscribe((event:any) => {
      // debugger
      // console.log(event);
      if (event instanceof NavigationStart) {

        this.backButtonClicked = event.navigationTrigger === 'popstate';
      }
    });
  }
}
