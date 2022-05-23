import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  listaAutori()
  {
    return this.http.post("http://2.44.173.210:7080/comic-be/api/author/select", {})
  }

  cancellaAutore(id:number)
  {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.delete("http://2.44.173.210:7080/comic-be/api/author/delete/" + id, {headers})
  }

  
  
}
