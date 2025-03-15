import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {}

  ngOnInit(): void {
    
  }

  setupMenuToggle() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu?.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu?.classList.remove('show-menu');
      });
    }
  }
}
