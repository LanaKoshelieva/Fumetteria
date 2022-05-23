import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() id:number;
  @Input() nome:string;
  @Input() cognome:string;
  @Input() mail:string;

  nomeUser:string;
  cognomeUser:string;

  constructor() { }

  ngOnInit() {
    
  }

}
