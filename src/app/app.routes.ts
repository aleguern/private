import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DumbComponent } from "./components/dumb/dumb.component";
import { CONTRACT, DOCUMENTS, INVESTOR_PROFILE, PAYMENT, ROUTES_DEBUT, ROUTES_INFORMATIONS, ROUTES_MANDAT, SIGN } from "./routes";


const routes: Routes = [
    {
        path: '',
        redirectTo: `/${ROUTES_DEBUT.INFORMATIONS_CLES}`,
        pathMatch: 'full',
    },
    {
        path: ROUTES_DEBUT.INFORMATIONS_CLES,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: ROUTES_INFORMATIONS.CHOIX_TITULAIRE,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: ROUTES_INFORMATIONS.INFORMATIONS_PERSONNELLES,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: ROUTES_INFORMATIONS.ADRESSE,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: ROUTES_INFORMATIONS.CONTACT,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: ROUTES_INFORMATIONS.RECAPITULATIF,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: INVESTOR_PROFILE.CUSTKN,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: INVESTOR_PROFILE.EXPERIENCE,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: ROUTES_MANDAT.CHOIX_MANDAT,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: PAYMENT.PAYMENT,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: PAYMENT.VALIDATION,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: CONTRACT.CONTRACT,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: DOCUMENTS.DOCUMENTS,
        component: DumbComponent,
        pathMatch: 'full',
    },
    {
        path: SIGN.SIGN,
        component: DumbComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})

export class AppRoutingModule { }

export const mappedRoutes = () => {
    let routesMapped = [];
    for (const route of Object.entries(routes)) {
        routesMapped = [...routesMapped, route]
    }
    return routesMapped;
}
