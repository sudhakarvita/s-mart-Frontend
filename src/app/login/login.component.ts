import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  adminLogin !:FormGroup
  constructor(private fb:FormBuilder, private router:Router){

    this.adminLogin = this.fb.group({
      username:['',[Validators.required]],
      pwd:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    
  }
  submit(){
   
   if(this.adminLogin.valid){
    alert('admin login succes')
    localStorage.setItem('admin',JSON.stringify(this.adminLogin.value))
    this.router.navigate(['/home'])
   }else{
    alert('login failed')
  }
  }
 
}
