import {Injectable} from '@angular/core'
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http'
import { IProduct } from '../models/product'
import { Observable, delay, retry, catchError, throwError } from 'rxjs'
import { ErrorService } from './error.service'

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ){
    }

    getAll(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams().append('limit', 10)
        }).pipe(
            delay(1300),
            retry(2),
            catchError(this.errorHandler.bind(this))
        )
    }

    private errorHandler(error: HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }
}