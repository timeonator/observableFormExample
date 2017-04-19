import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
  <input class="form-control"  [formControl]="searchControl"/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchControl= new FormControl();
  constructor(){
  this.searchControl.valueChanges.subscribe(value => {
    console.log(value);
  });
}}
