import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onomatopeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopeiaList.push(newOnomatopia);
  }
}
