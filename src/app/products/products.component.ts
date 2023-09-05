import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  
  productForm!:FormGroup
  distname:any
  product:any

  rowData:any[]=[];
  colDefs:any[]=[
    {field:"distributor"},
    { field:"productName"}
  ]
  defaultColDef: ColDef = {}
  constructor(private router :Router, private fb : FormBuilder,private adminapi:AdminService){}

  ngOnInit(){

    this.productForm = this.fb.group({
      distributorId :['',Validators.required],
      productName : ['',Validators.required]
    })

    
   this.adminapi.viewdistName().subscribe((res)=>{
    this.distname = res
    this.rowData  = this.distname
    console.log(this.rowData,'ddd');
    
  })
    
    this.adminapi.viewProduct(this.productForm.value).subscribe((res)=>{
      this.product = res 
      this.rowData = this.product
      console.log(this.rowData,'ppp');
   })
  }

  AddProduct(){
    if(this.productForm.valid){
    this.adminapi.addProduct(this.productForm.value).subscribe((res)=>{
      if(res){
        localStorage.setItem('products',JSON.stringify(res))
        alert('product add sucessfully')
        this.router.navigate(['/home/stockentry'])
        
      }else{
        alert('add product faild')
      }
    })
  }
  }


}
