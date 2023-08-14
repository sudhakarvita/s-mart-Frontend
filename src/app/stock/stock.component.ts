import { Component } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { EditStockComponent } from '../edit-stock/edit-stock.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  viewstock:any
  constructor(private adminapi : AdminService,private dialog:MatDialog,private router:Router){}

  ngOnInit(){
    this.adminapi.viewStock().subscribe((res)=>{
      console.log(res);
      
     this.viewstock = res
       })

  }
  stockEdit(data:any) {
    this.dialog.open(EditStockComponent,{
      width:'40%',
       data
    })  
  }

  delete(d:any){
    let c = d 
    this.adminapi.deleteStock(c._id).subscribe((res)=>{})
    window.location.reload()
  }
  Register(){
  this.router.navigate(['/home/customers'])
  }
}
