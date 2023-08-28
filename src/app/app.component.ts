import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Observable, tap} from 'rxjs';
import { ProductsService } from './services/products.service';
import {ModalService} from './services/modal.service'

// import {products as data} from './data/products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online store';
  loading = false
  filterProduct = ''
  //products$: Observable<IProduct[]>
  // products: IProduct[] = data
  // products: IProduct[] = []
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    ){
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap( () => this.loading = false)
    // )
    this.productsService.getAll().subscribe( () => {
      this.loading = false
    })
  }
}
