import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/model/dto/user-dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  userName = "tuo username";
  userPass = "tua password";
  isButtonDisabled: boolean = true;

  mail:string;
  password:string;

  click () 
  {
    if(this.mail.includes('&')|| this.mail.includes('_')) {
    alert("L’username non puo contenere caratteri '_' e '&' ");
    }

  }

  login()
  {
    console.log(this.mail, this.password)
    this.loginservice.login(this.mail, this.password).subscribe(response=>
      {
        const utente: UserDTO = response;
        console.log(utente)
      });
  }

  loginForm;

  constructor(private fb:FormBuilder, private loginservice:LoginService) 
  {
    this.loginForm = this.fb.group 
    ({
      nome: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern, Validators.minLength(4)]],
    })
  }

  control () {
    console.log("control", this.mail, this.password );
    if (this.mail == "" || this.mail == undefined || this.password == undefined || this.password == "") {
      this.isButtonDisabled = true;
    } else {
      this.isButtonDisabled = false;
    }
  }


  mySubmit() {
    console.log(this.loginForm)
  }

    ngOnInit() {
    }

}



















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
