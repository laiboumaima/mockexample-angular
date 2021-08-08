import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class ServiceproductService {

  constructor() { }
  getProducts(): Product[]{
    return PRODUCTS;
  }
  getProduct(id: number):any  {
    return  this.getProducts().find(product => product.id == id);
  }
}
