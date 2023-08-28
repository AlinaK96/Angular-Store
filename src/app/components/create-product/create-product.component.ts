import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    category: new FormControl<string>(''),
    price: new FormControl<number>(5)
  })

  get title(){
    return this.form.controls.title as FormControl
  }

  get category(){
    return this.form.controls.category as FormControl
  }

  get price(){
    return this.form.controls.price as FormControl
  }

  constructor(
    public modalService: ModalService,
    private productService: ProductsService
    ){}

  ngOnInit(): void {
  }

  submit(){
    this.productService.create({
      title: this.form.value.title as string,
      price: this.form.value.price as number,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: this.form.value.category as string,
      rating: {
        rate: 4,
        count: 25
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
