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
  Grandtotal: number = 0
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
}


