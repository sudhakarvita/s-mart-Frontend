import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http :HttpClient) { }

  adminLogin(data:any){
    return this.http.post('http://localhost:5000/admin/login',data)
  }

  addDistributor(data:any){
    return this.http.post('http://localhost:5000/distributor',data)
  }

  ViewDistributors(data:any){
    return this.http.get('http://localhost:5000/distributor/viewdistributors',data)
  }

  viewdistName(){
    return this.http.get('http://localhost:5000/distributor/viewdist')
  }

  addProduct(data:any){
    return this.http.post('http://localhost:5000/products',data)
  }

  viewProduct(data:any){
    return this.http.get('http://localhost:5000/products/viewproducts',data)
  }

  stockEntry(data:any){
    return this.http.post('http://localhost:5000/stockEntry',data)
  }

  viewStock(){
    return this.http.get('http://localhost:5000/stockEntry/viewstock')
  }

  viewproductsBydistId(distributorId:any){
    return this.http.get('http://localhost:5000/products/'+distributorId)
  }

  updateStock(id:any,data:any){
    return this.http.put('http://localhost:5000/stockEntry/update/'+id,data)
  }

  deleteStock(id:any){
    return this.http.delete('http://localhost:5000/stockEntry/delete/'+id)
  }

  addCustomer(data:any){
    return this.http.post('http://localhost:5000/customer',data)
  }

  viewCustomer(){
    return this.http.get('http://localhost:5000/customer/viewcustomers')
  }

  BycutomerNumber(mobileno:any){
    return this.http.get('http://localhost:5000/customer/mobileno?mobileno='+mobileno)
  }

 addProductSale(data:any){
  return this.http.post('http://localhost:5000/productsales',data)
 }
}
