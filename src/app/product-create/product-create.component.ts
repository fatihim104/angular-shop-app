import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  providers: [CategoryService]
})
export class ProductCreateComponent implements OnInit {

  categories:Category[]=[];
  model:any={
    name:"Iphone 17",
    categoryId: 0
  };

  constructor(private productService:ProductService, 
    private categoryService:CategoryService,
    private route:Router
     ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

  saveProduct(){
  console.log(this.model)
    // this.productService.createProduct(newProduct).subscribe(result => this.route.navigate(['/products']));


  }

}
