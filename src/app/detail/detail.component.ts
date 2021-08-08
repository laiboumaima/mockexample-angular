import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceproductService } from '../services/serviceproduct.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product:Product
   id  :number;
  constructor(private dataservice:ServiceproductService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => this.id = +params['id']);
    this.product = this.dataservice.getProduct(this.id);
  }
  goBack(): void {
    this.location.back();
  }
}
