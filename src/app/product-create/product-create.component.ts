import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  error:String="";
  model:any={
    categoryId: 0
  };

  constructor(private productService:ProductService, 
    private categoryService:CategoryService,
    private route:Router
     ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data)
  }

  saveProduct(form:NgForm){

    // this.productService.createProduct(newProduct).subscribe(result => this.route.navigate(['/products']));
    const extensions = ["jpeg", "jpg", "png"]
    const extension = this.model.imageUrl.split(".").pop();

    if(extensions.indexOf(extension) == -1){
      this.error = "resim uzantisi sadece jpeg, jpg veya png olmalidir."
      return;
    }

    if(this.model.categoryId == "0"){
      this.error = "Kategori secmelisiniz";
      return;
    }

    const product = {
      id:null,
      name: this.model.name,
      price: this.model.price,
      imageUrl: this.model.imageUrl,
      description: this.model.description,
      isActive: this.model.isActive,
      categoryId: this.model.categoryId
    }

    if(form.valid){
      this.productService.createProduct(product).subscribe(data => {
        this.route.navigate(['/products']);
      })
    }else{
      this.error = "Formu kontrol ediniz"
    }
   
  }

}
