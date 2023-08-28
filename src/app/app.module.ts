import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModelComponent } from './components/model/model.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import {ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModelComponent,
    CreateProductComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
