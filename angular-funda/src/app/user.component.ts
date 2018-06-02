import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>Hello, I am {{ name }} !</p>
    <p>I am the user component</p>
    `
})

export class UserComponent {
  name = 'Vishvang';

  onClickInput(event) {
    this.name = event.target.value;
  }
}
