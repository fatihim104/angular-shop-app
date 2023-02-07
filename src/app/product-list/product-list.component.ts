import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute,) { 
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if( params["id"]){
        this.products = this.productRepository.getProductsByCategory(params["id"]);
      }else{
        this.products = this.productRepository.getProducts();
      }
    }
    );
  }


}
