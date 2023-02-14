import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers: [CategoryService]
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoryService:CategoryService,
    private route: Router) { }

  ngOnInit(): void {
  }

  saveCategory(name:any){
    const newCategory={
      id:null,
      name:name.value
    }
    this.categoryService.createCategory(newCategory).subscribe(result => this.route.navigate(['/products']));
  }

}
