import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SRT Application Mechanics';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
