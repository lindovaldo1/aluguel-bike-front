import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserElement } from '../models/UserElement';

@Injectable()
export class UserElementService{
  elementApiUrl = 'http://localhost:3000/users/'
  constructor(private http:HttpClient){}

  getAll(): Observable<UserElement[]>{
    return this.http.get<UserElement[]>(this.elementApiUrl)
  }

  getById(id: number) {
    return this.http.get<UserElement[]>(`${this.elementApiUrl}${id}`)
  }

  create(element: UserElement) {
    return this.http.post(this.elementApiUrl, element);
  }

  edit(element: UserElement) {
    return this.http.put(`${this.elementApiUrl}${element.id}`, element);
  }

  delete(id: number) {
    return this.http.delete(`${this.elementApiUrl}${id}`);
  }

}
