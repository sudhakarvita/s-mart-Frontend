import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent {
  addDistributor !: FormGroup
  viewdis: any

  rowData: any[] = [];

  colDefs: ColDef[] = [

    { field: 'distributor',},
    { field: 'mobileno',},
    { field: 'gstno',}
  ]

  defaultColDef: ColDef = {
    sortable:true,filter:true,
  }
  
  constructor(private router: Router, private fb: FormBuilder, private admapi: AdminService) { }

  ngOnInit() {
    this.addDistributor = this.fb.group({
      distributor: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      gstno: ['', [Validators.required]],
    })

    this.admapi.ViewDistributors(this.addDistributor.value).subscribe((res) => {
      this.viewdis = res
   

      this.rowData = this.viewdis
    

    })
  }

  Add() {
    if (this.addDistributor.valid) {
      this.admapi.addDistributor(this.addDistributor.value).subscribe((res) => {
        if (res) {
          localStorage.setItem('distributor', JSON.stringify(res))
          alert('distributor add succesfully')
          this.router.navigate(['/home/products'])
        } else {
          alert('add distributor failed')
        }
      })
    }
  }
}
