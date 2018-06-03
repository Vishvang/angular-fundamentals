import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  @Input() items = [];
  @Output() itemInserting = new EventEmitter<string>();
  newItem = '';
  constructor() {}

  // OnUserInput(event) {
  //   this.newItem = event.target.value;
  // }

  OnAddItems() {
     this.itemInserting.emit(this.newItem);
  }
  ngOnInit() {
  }

}
