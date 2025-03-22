import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  activeRoute: string = '';

  constructor(private router: Router) {
    debugger
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.activeRoute.includes(route);
  }
  
}
