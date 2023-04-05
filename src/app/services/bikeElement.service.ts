import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeElement } from '../models/BikeElement';

@Injectable({
  providedIn: 'root'
})
export class BikeElementService{
  elementApiUrl = 'http://localhost:3000/bikes/'
  constructor(private http:HttpClient){}

  getAll(): Observable<BikeElement[]>{
    return this.http.get<BikeElement[]>(this.elementApiUrl)
  }

  getById(id: number): Observable<BikeElement> {
    return this.http.get<BikeElement>(`${this.elementApiUrl}${id}`)
  }

  create(element: BikeElement): Observable<BikeElement> {
    return this.http.post<BikeElement>(this.elementApiUrl, element);
  }

  edit(element: BikeElement): Observable<BikeElement>{
    return this.http.put<BikeElement>(`${this.elementApiUrl}${element.id}`, element);
  }

  delete(id: number) {
    return this.http.delete<BikeElement>(`${this.elementApiUrl}${id}`);
  }

}
