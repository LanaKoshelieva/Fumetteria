import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TitleDevskillComponent } from 'src/app/components/title-devskill/title-devskill.component';
import { ButtonDevskillComponent } from 'src/app/components/button-devskill/button-devskill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage, TitleDevskillComponent, ButtonDevskillComponent]
})
export class LoginPageModule {}
