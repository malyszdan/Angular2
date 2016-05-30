import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{car}} details!</h2>'
})
export class AppComponent {
    title = 'World of Cars';
    car = 'BMW M3';
}