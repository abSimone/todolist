import { Component, Input, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import Item from 'src/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  ngOnInit(): void {}
}
