import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.services = [
      { 
        "id": 1, 
        "title": "Web Development", 
        "description": "We build modern and responsive web applications.", 
        "icon": "fas fa-code", 
        "color": "#007bff"
      },
      { 
        "id": 2, 
        "title": "Mobile App Development", 
        "description": "Android & iOS app development with great user experience.", 
        "icon": "fas fa-mobile-alt", 
        "color": "#28a745"
      },
      { 
        "id": 3, 
        "title": "Digital Marketing", 
        "description": "SEO, social media marketing,  PPC advertising and many more.", 
        "icon": "fas fa-bullhorn", 
        "color": "#ffc107"
      },
      { 
        "id": 4, 
        "title": "Graphic Design", 
        "description": "Logos, branding, UI/UX design for websites & apps.", 
        "icon": "fas fa-paint-brush", 
        "color": "#dc3545"
      },
      { 
        "id": 5, 
        "title": "Cloud Solutions", 
        "description": "AWS, Azure, and Google Cloud consulting & deployment.", 
        "icon": "fas fa-cloud", 
        "color": "#17a2b8"
      },
        { 
          "id": 6, 
          "title": "Quality ansurance",
          "description": "Comprehensive testing services for web and mobile apps.", 
          "icon": "fas fa-check-circle", 
          "color": "#6f42c1"
        },
      
    ]
    
  }
}