import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  url:any = 'http://localhost:3000/user'
  constructor(private http:HttpClient) { }
  loginServ(){
    return this.http.get(this.url)
  }
}
