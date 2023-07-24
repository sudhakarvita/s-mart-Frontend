import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-entry',
  templateUrl: './stock-entry.component.html',
  styleUrls: ['./stock-entry.component.scss']
})
export class StockEntryComponent {

constructor(private router: Router){}

ngOnInit(){}

Enter(){
this.router.navigate(['home/stock'])
}
}
