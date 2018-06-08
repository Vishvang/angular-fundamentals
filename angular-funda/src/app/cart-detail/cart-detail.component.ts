import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { random } from 'lodash';

@Component ({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  @Input() items = [];
  @Output() itemInserting = new EventEmitter<string>();
  newItem = '';
  constructor() {}

  number = 2;
  // OnUserInput(event) {
  //   this.newItem = event.target.value;
  // }

  OnAddItems() {
    this.itemInserting.emit(this.newItem);
    this.number = random(1, 10);
    this.newItem = '';
  }
  ngOnInit() {
  }

}
