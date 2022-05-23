import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {

  @Input() nomeCompleto:string;
  @Input() id:number;

  nome:string;
  cognome:string;

  constructor() { }

  ngOnInit() {

    const separato = this.nomeCompleto.split(' ');
    let parole = 0;
    let index = 0;

    while (index < separato.length && parole < 2)
    {
      let elementoCorrente = separato[index];
      if (elementoCorrente != '')
      {
        switch(parole)
        {
          case 0: this.nome = elementoCorrente; 
            parole ++;
            break;
          case 1: this.cognome = elementoCorrente; 
            parole ++;
            break;
        }
      }
      index++      
    }
    
  }

}
