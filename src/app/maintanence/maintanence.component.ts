import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-maintanence',
  templateUrl: './maintanence.component.html',
  styleUrls: ['./maintanence.component.scss']
})
export class MaintanenceComponent {
  Expencesform! :FormGroup
  viewexpences:any
  Grandtotal: number = 0
  constructor(private router:Router,private fb :FormBuilder,private adminapi:AdminService){}
  ngOnInit(){

   this.Expencesform = this.fb.group({
     date:['', Validators.required],
    category :['', Validators.required],
    section :['', Validators.required],
    amount:['', Validators.required],
   })
    this.adminapi.viewExpences().subscribe((res)=>{
      this.viewexpences = res 
     this.viewexpences.map((x:any)=>{
      this.Grandtotal += x.amount
     })
    })
  }

  Add(){
   this.adminapi.addExpences(this.Expencesform.value).subscribe((res)=>{
    alert('Add Expences sucessfully')
    window.location.reload()
  
    
   })
  }
}

