import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-devskill',
  templateUrl: './button-devskill.component.html',
  styleUrls: ['./button-devskill.component.scss'],
})
export class ButtonDevskillComponent implements OnInit {

  @Input() text:string;
  @Input() link:string

  // isButtonDisabled: boolean = true;
  constructor() { }

  ngOnInit() {}

}
