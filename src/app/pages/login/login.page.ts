import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  title = "Entra nel mondo di DevSkill";
  userName = "tuo username";
  userPass = "tua password";
  logoSource = 'assets/logo_devskill.png';
  isButtonDisabled: boolean = true;
  username:string;
  password:string;

  // onLogoMouseOver() {
  //   alert ("Don't touch me");
  // }  
  
  control () {
    console.log("control", this.username, this.password );
    if (this.username == "" || this.username == undefined || this.password == undefined || this.password == "") {
      this.isButtonDisabled = true;
    } else {
      this.isButtonDisabled = false;
    }
  }

  click () {
    if(this.username.includes('&')|| this.username.includes('_')) {
    alert("L’username non puo contenere catteri '_' e '&' ");
  }

}

  constructor() { }

  ngOnInit() {
  }

}
