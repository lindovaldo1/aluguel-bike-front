import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeElement } from '../models/BikeElement';

@Injectable()
export class BikeElementService{
  elementApiUrl = 'http://localhost:3000/bikes/'
  constructor(private http:HttpClient){}

  getAll(): Observable<BikeElement[]>{
    return this.http.get<BikeElement[]>(this.elementApiUrl)
  }

  getById(id: number) {
    return this.http.get<BikeElement[]>(`${this.elementApiUrl}${id}`)
  }

  create(element: BikeElement) {
    return this.http.post(this.elementApiUrl, element);
  }

  edit(element: BikeElement) {
    return this.http.put(`${this.elementApiUrl}${element.id}`, element);
  }

  delete(id: number) {
    return this.http.delete(`${this.elementApiUrl}${id}`);
  }

}
