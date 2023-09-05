import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit{
  stockEntryform!:FormGroup

 constructor(
  @Inject(MAT_DIALOG_DATA) public  data:any,
  private fb:FormBuilder,private adminapi:AdminService){}

  ngOnInit(): void {
    this.stockEntryform = this.fb.group({
      distributorId :['',Validators.required],
      productId:['',Validators.required],
      productQuantity:['',Validators.required],
      price:['',Validators.required],
      sellingPrice:['',Validators.required]
    })

    this.stockEntryform.patchValue({
      distributorId :this.data.distributor_details[0]?.distributor,
      productId:this.data.product_details[0]?.productName,
      productQuantity:this.data.productQuantity,
      price:this.data.price,
      sellingPrice:this.data.sellingPrice
    })
  }
  upate(){
    let edata={
      productQuantity:this.stockEntryform.value.productQuantity,
      price:this.stockEntryform.value.price,
      sellingPrice:this.stockEntryform.value.sellingPrice 
    }
   this.adminapi.updateStock(this.data._id,edata ).subscribe((res)=>{
    window.location.reload()
    
   })
  }


}
