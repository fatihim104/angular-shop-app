import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() sProduct:Product ;
  @Output() unSelectEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  unselectProduct(){
    this.unSelectEvent.emit();
  }
}
