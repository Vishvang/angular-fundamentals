import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <!-- <input type="text" [(ngModel)]="name"> -->
    <input type="text" (input)="onClickInput($event)" [value]="name">
    <p>Hello, I am {{ name }} !</p>
    <p>I am the user component</p>
    <app-user-detail></app-user-detail>
    `
})

export class UserComponent {
  // name = 'Vishvang';
  @Input() name;
  @Output() OnNameChange = new EventEmitter<string>();

  onClickInput(event) {
    this.OnNameChange.emit(event.target.value);
    // this.name = event.target.value;
  }
}
