import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'cwh-todo-list';
  constructor(){
    // This function is used for change in code or title after some time
    // setTimeout(() => {
    //   this.title="Changed title";
      
    // }, 2000);   
  }
}