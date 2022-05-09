import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {
// @Input ()
  userName = "tuo username";
  userPass = "tua password";
  isButtonDisabled: boolean = true;
  username:string;
  password:string;



  // onLogoMouseOver() {
  //   alert ("Don't touch me");
  // }  
  
  // control () {
  //   console.log("control", this.username, this.password );
  //   if (this.username == "" || this.username == undefined || this.password == undefined || this.password == "") {
  //     this.isButtonDisabled = true;
  //   } else {
  //     this.isButtonDisabled = false;
  //   }
  // }

  click () {
    if(this.username.includes('&')|| this.username.includes('_')) {
    alert("L’username non puo contenere caratteri '_' e '&' ");
  }

}

loginForm;

constructor(private fb:FormBuilder) 
{
  this.loginForm = this.fb.group 
  ({
    nome: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern]],
  })
}

mySubmit() {
  console.log(this.loginForm)
}

  ngOnInit() {
  }

}
