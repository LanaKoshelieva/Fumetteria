import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  registerForm;

  constructor(private fb:FormBuilder) 
  {
    this.registerForm = this.fb.group 
    ({
      nome: ['', Validators.required],
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern, Validators.minLength(8)]],
    })
  }

  ngOnInit() {
  }

}
