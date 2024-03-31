import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private _loginService:LoginService, private _router:Router){}

  public loginForm:FormGroup=new FormGroup({
    
      email:new FormControl(),
      password: new FormControl()
    
  })

  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        localStorage.setItem("instituteManagementsProject-token",data.token)
        alert("login successfully")
        this._router.navigateByUrl("/dashboard")
      },
      (err:any)=>{
        alert ("fail to login")
      }
    )
  }
  
  
}
