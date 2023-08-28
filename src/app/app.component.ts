import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
// import {products as data} from './data/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online store';
  loading = false

  // products: IProduct[] = data
  products: IProduct[] = []
  constructor(private productsService: ProductsService){
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe( products => {
      this.products = products
      this.loading = false
    })
  }
}
