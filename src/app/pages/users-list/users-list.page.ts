import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/model/dto/user-dto';
import { UserListDTO } from 'src/app/model/dto/user-list-dto';
import { UsersListService } from './users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  users:UserListDTO;

  constructor(private service:UsersListService) {
    this.users = new UserListDTO;
   }

  nascondi(item:UserDTO)
  {
    let index = this.users.list.indexOf(item);
    this.users.list.splice(index,1);
    console.log(this.users.list);  
  }

  caricaListaUtenti()
  {
    this.service.listaUtenti().subscribe(resp =>{
    this.users  = resp;  
    })
  }

  ngOnInit() {
    this.caricaListaUtenti();
  }

}
