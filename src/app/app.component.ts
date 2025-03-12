import { Component, OnInit, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // Signal för att lagra produkter
  products = signal<Product[]>([]);

  // Computed signal för att räkna antal produkter
  productCount = computed(() => this.products().length);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((response) => {
        this.products.set(response); // Uppdatera signalen
        console.log("Produkter hämtade:", this.products());
      });
  }
}
