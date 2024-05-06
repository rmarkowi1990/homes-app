import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule, RouterLink } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
    <img routerLink = "" class="brand-log" src="/assets/logo.svg" alt="logo" aria-hidden=true />
    </header>
  <section class="content">
    <router-outlet>
    </router-outlet>
  </section>
  <section class="results">
   
  </section>
  </main>
  `
  ,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, HousingLocationComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
