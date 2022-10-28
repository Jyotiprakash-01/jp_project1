import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  url:any = 'http://localhost:3000/signup'
  constructor(private http:HttpClient) { }
  loginServ(){
    return this.http.get(this.url)
  }
  registerServ(data:any){
    return this.http.post(this.url, data)
  }

}
