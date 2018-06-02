import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>Hello, I am {{ name }} !</p>
    <p>I am the user component</p>
    `
})

export class UserComponent {
  // name = 'Vishvang';
  @Input() name;

  onClickInput(event) {
    this.name = event.target.value;
  }
}
