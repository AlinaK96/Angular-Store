import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl
  }

  constructor(public modalService: ModalService){}

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
    
  }
}
