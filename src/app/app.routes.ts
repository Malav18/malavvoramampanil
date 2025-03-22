import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'aboutus', component: AboutusComponent },
    // Add other routes as needed
  ];
  
