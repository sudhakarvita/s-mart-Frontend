import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { FormBuilder,Validators } from '@angular/forms';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.component.html',
  styleUrls: ['./stock-entry.component.scss']
})
export class StockEntryComponent {

  stockEntryform!:any
  distname:any
  products:any
  distidproducts:any
  distributorId:any=[]
  

constructor(private router: Router,private adminapi : AdminService,private fb :FormBuilder,){}

ngOnInit(){
  this.stockEntryform = this.fb.group({
    distributorId :['',Validators.required],
    productId:['',Validators.required],
    productQuantity:['',Validators.required],
    price:['',Validators.required],
    sellingPrice:['',Validators.required]
  })
  this.adminapi.viewdistName().subscribe((res)=>{
    this.distname = res
  })

     
   
}


Enter(){
    this.adminapi.stockEntry(this.stockEntryform.value).subscribe((res)=>{
      alert("Product add sucessfully") 
      this.router.navigate(['/home/stock'])
    })      
}

isGetproduct(event:any){
  let dId = event
  
  this.adminapi.viewproductsBydistId(dId).subscribe((res)=>{
    this.distidproducts = res })
   
}
}
