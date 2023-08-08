import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  adminLoginform !:FormGroup
  constructor(private fb:FormBuilder, private router:Router,private Adminapi :AdminService){ }

  ngOnInit(): void {
    this.adminLoginform = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  submit(){
    if(this.adminLoginform.valid){

      this.Adminapi.adminLogin(this.adminLoginform.value).subscribe((res:any)=>{ 
       if(res){
        localStorage.setItem('admin',JSON.stringify(res))
        alert("admin login success")
        this.router.navigate(['home'])
       }else{
        alert("admin login failed")
       
       }
      })
   }
}
}