import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title = "Hey there";
  userName = "tuo username";
  password = "tua password";
  logoSource = 'assets/logo_devskill.png';
  isButtonDisabled: boolean = true;
  onButtonMouseOver() {
    alert ("Don't touch me")
  }



  constructor() { }

  ngOnInit() {
  }

}
