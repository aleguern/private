import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router } from '@angular/router';

import { RouteService } from './core/services/route.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breadcrumb-kata';
  currentRoute: string;

  constructor(
    private readonly router: Router,
    private route: ActivatedRoute,
    private routeService: RouteService,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.replace('/', '');
        console.log('currentRoute', this.currentRoute)
      }
    });;
  }

}
