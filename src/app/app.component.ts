import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  // selector: 'app',
  // selector: '.app',
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Home Page';

  getTitle() {
    return this.title;
  }

  constructor(private http:HttpClient){ }

  createProduct(){
    const product ={ 
        id: 3, 
        name: "iphone 30", 
        price: 900000, 
        imageUrl: "1.jpeg", 
        description: "iyi telefon", 
        isActive: true, 
        categoryId:2 
      };
   

    this.http.post("https://shop-api-7dd4e-default-rtdb.europe-west1.firebasedatabase.app/products.json", product)
              .subscribe(result => console.log(result));
              
  }
}
