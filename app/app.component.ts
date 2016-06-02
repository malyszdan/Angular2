
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { CarService } from './car.service';
import { CarDetailsComponent } from './car-details.component';
import { CarsComponent} from './cars.component';
import { DashboardComponent } from './dashboard.component';




@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink] = "['Dashboard']">Dashboard</a>
            <a [routerLink] = "['Cars']">Cars</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CarService
    ]
})


@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'CarDetail',
        component: CarDetailsComponent
    },
    {
        path: '/cars',
        name: 'Cars',
        component: CarsComponent
    }
])


export class AppComponent{
    title = 'World of Cars';
}