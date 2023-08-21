import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit{

  displayedColumns: string[] = ['Cus No', 'Product','Price','Quantity','Total','Total Price','Sale Date'];
  dataSource: any =[];
  viewsales:any
  dateflag:boolean=false
  Grandtotal: number = 0
  searchReport:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private adminapi :AdminService) {
  }
  ngOnInit(): void {
   this.adminapi.viewSales().subscribe((res)=>{
    this.viewsales = res
    this.viewsales.map((x:any)=>{ 
      this.Grandtotal+=x.grandTotal
      
    })
    
   
    this.dataSource = new MatTableDataSource(this.viewsales)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

getReport(e:any){
  this.dateflag=false
  this.searchReport=e
if(e!='total'){
  this.dateflag=true
}

}
searchDate:any
  getSale(event:any){
    this.Grandtotal=0
    if(this.searchReport=="day"){
      this.searchDate = new Date(event).getDate()
    }else if(this.searchReport=="month"){
      this.searchDate = new Date(event).getMonth()
    }else if(this.searchReport=="year"){
      this.searchDate = new Date(event).getFullYear()
    }
    

    this.adminapi.Salereport(this.searchReport,this.searchDate).subscribe((res)=>{
      this.viewsales = res
    this.viewsales.map((x:any)=>{ 
      this.Grandtotal+=x.grandTotal
      
    })
  
   this.dataSource = new MatTableDataSource(this.viewsales)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }
}


