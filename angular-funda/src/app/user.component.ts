import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Hello, I am {{ name }} !</p>
    <p><input type="text" (input)="onClickInput($event)"/></p>
    <p>I am the user component</p>
    `
})

export class UserComponent {
  name = 'Vishvang';

  onClickInput(event) {
    this.name = event.target.value;
  }
}
