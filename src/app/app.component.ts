import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  fruits = ['Mango', 'Orange', 'Banana'];

  constructor() { }

  addFruit (item:any) {
    this.fruits.push(item);
  }  
}