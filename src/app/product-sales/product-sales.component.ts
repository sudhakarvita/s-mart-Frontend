import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.scss']
})
export class ProductSalesComponent {
  productSalesform!:FormGroup
  viewproducts:any
  viewstock:any
  viewproductsflag:boolean = false
  csProducts:any
  grandTotal:number = 0

constructor(private adminapi:AdminService, private fb:FormBuilder,private router :Router){}

ngOnInit(){

  this.productSalesform = this.fb.group({
    mobileno :['', Validators.required],
    productName :['', Validators.required],
    Price :['', Validators.required],
    Quantity :['', Validators.required],

  })
  }
  selectedProducts(event:any,p:any){

    this.grandTotal += p.sellingPrice * Number(event.target.value)
      
    if(!this.csProducts){
      this.csProducts = {
        mobileno:this.productSalesform.value.mobileno,
        saledProducts:[{
          productName:p.product_details[0].productName,
          Price:p.sellingPrice,
          Quantity:event.target.value,
          Total:p.sellingPrice*event.target.value
        }],
        grandTotal:this.grandTotal, 
      }   
    }else{
      let pro = {
        productName:p.product_details[0].productName,
          Price:p.sellingPrice,
          Quantity:event.target.value,
          Total:p.sellingPrice*event.target.value
          
      }
      this.csProducts.grandTotal = this.grandTotal
      this.csProducts.saledProducts.push(pro)
    }
  
    
  }
  

Enter(){
  this.adminapi.BycutomerNumber(this.productSalesform.value.mobileno).subscribe((res)=>{
    if(res){
      this.viewproductsflag =true
      this.adminapi.viewStock().subscribe((res)=>{
       this.viewproducts= res
        })
    }else{
     alert('user not found')
     this.router.navigate(['/home/customers'])
    } 
  })
}

Save(){
  // console.log(this.csProducts,"====",this.viewproducts);
  
  this.adminapi.addProductSale(this.csProducts).subscribe((res)=>{

    alert('sale add sucessfully')
    this.router.navigate(['/home/sale'])
    
  })
}

}







