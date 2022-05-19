import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCommand } from 'src/app/model/package/command/login-command';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username:string, pass:string)
  {
    const loginCommand = new LoginCommand();
    loginCommand.email = username;
    loginCommand.password = pass;

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/login/login", loginCommand);
  }
  
}
