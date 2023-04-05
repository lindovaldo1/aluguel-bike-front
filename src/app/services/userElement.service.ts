import { LoginElement } from './../models/LoginElement';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserElement } from '../models/UserElement';

@Injectable({
  providedIn: 'root'
})
export class UserElementService{
  elementApiUrl = 'http://localhost:3000/users/'
  constructor(private http:HttpClient){}

  getAll(){
    return this.http.get<UserElement[]>(this.elementApiUrl)
  }

  getById(id: number): Observable<UserElement[]> {
    return this.http.get<UserElement[]>(`${this.elementApiUrl}${id}`)
  }

  getLogin(element: LoginElement){
    return this.http.post(this.elementApiUrl+'login', element)
  }

  create(element: UserElement): Observable<UserElement> {
    return this.http.post<UserElement>(this.elementApiUrl, element);
  }

  edit(element: UserElement): Observable<UserElement> {
    return this.http.put<UserElement>(`${this.elementApiUrl}${element.id}`, element);
  }

  delete(id: number): Observable<UserElement> {
    return this.http.delete<UserElement>(`${this.elementApiUrl}${id}`);
  }

}
