import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  rootName = 'Rocky';
  rootItems = ['Apples', 'Banana', 'Cherries'];

  nameChanged(newName) {
      this.rootName = newName;
  }

  userInputPass(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
