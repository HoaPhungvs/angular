import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = ` http://localhost:3000/user`
  constructor(private http:HttpClient) { }
 
  signUp(user:IUser):Observable<IUser>{
    return this.http.post<any>(this.API_URL,user)
  }
  signIn(user:IUser):Observable<IUser>{
    return this.http.post<any>(this.API_URL,user)
  }

 
}
