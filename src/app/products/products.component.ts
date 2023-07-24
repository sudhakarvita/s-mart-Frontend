import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  
  constructor(private router :Router){}
  ngOnInit(){}

  Add(){
    this.router.navigate(['home/stockentry'])
  }
}
