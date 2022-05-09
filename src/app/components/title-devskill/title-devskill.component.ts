import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-devskill',
  templateUrl: './title-devskill.component.html',
  styleUrls: ['./title-devskill.component.scss'],
})
export class TitleDevskillComponent implements OnInit {

  @Input() text:string;

  constructor() { }

  ngOnInit() {}

}
