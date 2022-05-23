import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http:HttpClient) { }

  listaUtenti()
  {
    return this.http.post("http://2.44.173.210:7080/comic-be/api/user/search", {})
  }

  cancellaUtente(id:number)
  {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.delete("http://2.44.173.210:7080/comic-be/api/user/delete/" + id, {headers})
  }

}
