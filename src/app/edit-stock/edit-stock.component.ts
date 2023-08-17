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
      distributorId :this.data.distributorId,
      productId:this.data.productId,
      productQuantity:this.data.productQuantity,
      price:this.data.price,
      sellingPrice:this.data.sellingPrice
    })
  }
  upate(){
   this.adminapi.updateStock(this.data._id, this.stockEntryform.value).subscribe((res)=>{
    window.location.reload()
    
   })
  }


}
