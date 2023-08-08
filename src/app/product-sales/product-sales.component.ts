import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.scss']
})
export class ProductSalesComponent {
  productSalesform!:FormGroup
  viewcustomers:any
  viewproducts:any
  viewstock:any

constructor(private adminapi:AdminService, private fb:FormBuilder){}

ngOnInit(){

  this.productSalesform = this.fb.group({
    customername :['',Validators.required],
    productName:['',Validators.required],
    sellingprice:['',Validators.required]
  })

  this.adminapi.viewStock().subscribe((res)=>{
       this.viewstock = res
        })

  }



Enter(){

}
}


// this.adminapi.viewCustomer().subscribe((res)=>{
//   this.viewcustomers = res
// })

// this.adminapi.viewProduct(this.productSalesform.value).subscribe((res)=>{
//   this.viewproducts = res
// })


