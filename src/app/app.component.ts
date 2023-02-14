import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  // selector: 'app',
  // selector: '.app',
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  private title = 'Home Page';

  getTitle() {
    return this.title;
  }

  constructor(){ }

}
