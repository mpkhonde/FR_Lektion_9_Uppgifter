import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log("Produkter hämtade:", this.products);
        },
        error: (err) => {
          console.error("Fel vid hämtning av produkter:", err);
        }
      });
  }
}
