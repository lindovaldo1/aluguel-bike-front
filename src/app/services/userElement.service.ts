import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserElement } from '../models/UserElement';
import { LoginElement } from '../models/LoginElement';

@Injectable()
export class UserElementService{
  elementApiUrl = 'http://localhost:3000/users/'
  constructor(private http:HttpClient){}

  getAll(): Observable<UserElement[]>{
    return this.http.get<UserElement[]>(this.elementApiUrl)
  }

  getById(id: number): Observable<UserElement> {
    return this.http.get<UserElement>(`${this.elementApiUrl}${id}`)
  }

  login(){
    let element = {
      email: localStorage.getItem('email'),
      password: localStorage.getItem('password')
    }
    return this.http.get<LoginElement>(this.elementApiUrl+'login', element)
  }

  create(element: UserElement): Observable<UserElement> {
    return this.http.post<UserElement>(this.elementApiUrl, element);
  }

  edit(element: UserElement): Observable<UserElement> {
    console.log(element)
    return this.http.put<UserElement>(`${this.elementApiUrl}${element.id}`, element);
  }

  delete(id: number): Observable<UserElement> {
    return this.http.delete<UserElement>(`${this.elementApiUrl}${id}`);
  }

}
