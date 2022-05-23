import { Component, OnInit } from '@angular/core';
import { AuthorDTO } from 'src/app/model/dto/author-dto';
import { ListDTO } from 'src/app/model/dto/list.dto';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  authors:ListDTO;
  
  constructor(private service:ListService) {
    this.authors = new ListDTO;
   }

  onClick(item:AuthorDTO)
  {
    //cancella dalla pagina
    let index = this.authors.list.indexOf(item);
    console.log(item);
    console.log(index);
    this.authors.list.splice(index,1);
    console.log(this.authors.list);  
   
    //cancella da DB 
    // this.service.cancellaAutore(item.value).subscribe(responce =>{
    //   this.caricaLista();
    // })
  }

  caricaLista()
  {
    this.service.listaAutori().subscribe(response =>{
    this.authors  = response;  
    })
  }

  ngOnInit() {
    this.caricaLista();
  }

}
