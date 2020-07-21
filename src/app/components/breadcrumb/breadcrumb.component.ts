import { Component, Input } from "@angular/core";
import { ActivatedRoute, Event, NavigationStart, Router } from '@angular/router';
import { ROADMAP, RoadmapI } from "../../routes";

interface RouteListI {
  step: number,
  time: number,
  name: string,
  route: string
};

interface CurrentRouteInformationsI {
  name: string,
  time: number,
  step: number
}

@Component({
  selector: 'ftn-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {

  currentRoute: string;
  currentRouteInformations: CurrentRouteInformationsI;
  currentStepRoutes: string[];
  routeListBreadcrumb: RoadmapI[];
  mappedRoutesObject = {};
  @Input() barStep = 100; // 100 => Step 1 @ 0%, 250 => Step 2 @ 50%
  isMobile: boolean;
  showAllTimers = false;

  constructor(private readonly router: Router, private route: ActivatedRoute) {

    this.currentRoute = this.router.url.replace('/', '');
    console.log('this current route ', this.currentRoute);

    this.mappingRoutes();
    this.getCurrentBarStepValue();

    this.routeListBreadcrumb = ROADMAP;

    this.router.events.subscribe((event: Event) => {
      console.log('this currentRoute', this.currentRoute, event);
      this.getCurrentBarStepValue();
      this.mappingRoutes();
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.replace('/', '');
        this.mappingRoutes();
      }
    })
  }

  private mappingRoutes(): void {
    ROADMAP.forEach(routeMap => {
      Object.entries(routeMap.routes).forEach((route, index) => {
        if (this.router.url === `/${route[1]}`) {
          this.createStepValues(routeMap);
          this.currentRouteInformations = { name: routeMap.name, time: routeMap.time, step: routeMap.step };
        }
      })
    });
  }

  private getCurrentBarStepValue(): void {
    for (const key in this.mappedRoutesObject) {
      if (this.router.url === `/${this.mappedRoutesObject[key].route}`) {
        this.barStep = this.mappedRoutesObject[key].step;
      }
    }
  }

  private createStepValues = (routeMap): void => {
    let loop = 1;
    const routes: any = Object.values(routeMap)[1];
    const step = Object.keys(routes).length;
    this.currentStepRoutes = Object.values(routeMap.routes);

    for (const key in routes) {
      if (routes.hasOwnProperty(key)) {
        this.mappedRoutesObject[key] = this.calculateStep(routes[key], routeMap.step, loop, step);
        if (this.router.url === `/${routes[key]}`) {
          this.barStepValue(this.mappedRoutesObject[key].step);
        }
        loop++;
      }
    }
  }

  private calculateStep = (route: string, index: number, loop: number, step: number): object => {
    const baseStep = index * 100;
    const MAX_CAP = 99;
    return { route, step: loop === step ? baseStep + MAX_CAP : baseStep + (Math.round(((100 / step) * loop))) };
  }

  private barStepValue(value: number): void {
    this.barStep = value;
  }

  previousStep = (): void => {
    const previousRoute = this.currentStepRoutes[this.getRouteIndex() - 1];
    this.router.navigate([previousRoute]);
  }

  getBarStepFromPercentage = (value = this.barStep): number => {
    return parseInt(String(value).charAt(0), 10);
  }

  getBarStepPercentage(key, step): number {
    let left;
    let right;
    const percentage = this.barStep % 100;
    // Take the step from the percentage
    const barPercStep = this.getBarStepFromPercentage(this.barStep);
    if (barPercStep === step) {
      if (percentage <= 50) {
        right = percentage * 2;
        left = 0;
      } else if (percentage > 50) {
        right = 100;
        left = (percentage - 50) * 2;
      }

    } else if (barPercStep > step) {
      return 100;
    }

    return key === 'right' ? right : left;

  }

  getBarPercentageMobile = () => this.barStep >= 100 ? this.barStep % 100 : this.barStep;

  validated = (i): boolean => {
    return this.barStep >= (i + 1) * 100;
  }

  showPrevious = (): boolean => this.getRouteIndex() > 0

  getPercentage = (): number => {
    const length = this.currentStepRoutes.length;
    return ((this.getRouteIndex() * 100) / length) + 100 / length
  }

  private getRouteIndex = (): number => {
    return this.currentStepRoutes.indexOf(this.currentRoute)
  }

}
