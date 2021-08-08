import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ServiceproductService } from '../services/serviceproduct.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Product[];
  constructor(private dataservice:ServiceproductService , private router: Router ) { }

  ngOnInit(): void {
    this.products =  this.dataservice.getProducts();
  }
  onSelect(prod: Product): void {
    this.router.navigate(['/detail', prod.id]);
  }
}
