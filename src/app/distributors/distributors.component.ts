import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent {
  
  constructor(private router:Router){}
  ngOnInit(){}

  Add(){
    this.router.navigate(['home/products'])
  }
}
