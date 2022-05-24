import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() id:number;
  @Input() nomeUser:string;
  @Input() cognomeUser:string;
  @Input() mail:string;



  constructor() { }

  ngOnInit() {
    
  }

}
