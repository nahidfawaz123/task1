import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  count=0;
  counterAdd(){
    this.count++

  }
  counterSep(){
    this.count--
  }
}
