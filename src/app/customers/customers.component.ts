import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit{
  custRegform!:FormGroup
  viewcustomers:any
  viewproducts:any
  viewstock:any

 constructor(private fb :FormBuilder, private adminapi :AdminService){}

  ngOnInit(): void {
    this.custRegform = this.fb.group({
      customername: ['',Validators.required],
      emailId: ['',Validators.required],
      mobileno: ['',Validators.required]
    })
  
  }

  Register(){
   this.adminapi.addCustomer(this.custRegform.value).subscribe((res)=>{
    alert('Customer add sucessfully')
    window.location.reload()
   })
  }
}
