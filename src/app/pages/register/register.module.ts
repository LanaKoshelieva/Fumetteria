import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { TitleDevskillComponent } from 'src/app/components/title-devskill/title-devskill.component';
import { ButtonDevskillComponent } from 'src/app/components/button-devskill/button-devskill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, TitleDevskillComponent, ButtonDevskillComponent]
})
export class RegisterPageModule {}
