
import { Injectable } from '@angular/core';
import { RouteSteps } from '../models/route.model'

@Injectable({
    providedIn: 'root',
})
export class RouteService {

    constructor() { }

    isPartOfRoute = (step: RouteSteps, currentRoute: string): boolean =>
        Object.values(step).indexOf(currentRoute) !== -1

    matchErrorRoute = (currentRoute: string): boolean =>
        /erreur/g.test(currentRoute);

}




