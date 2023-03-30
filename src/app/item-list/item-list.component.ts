import { Component, OnInit } from '@angular/core';
import Item from 'src/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  item! :Item;
  item_urgent!  : Item;

  constructor() { }

  ngOnInit(): void {
    this.item = new Item("Piccolo task non urgente", false);
    this.item_urgent = new Item("Piccolo task urgente", true);
  }

}
