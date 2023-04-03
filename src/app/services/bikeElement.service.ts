import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeElement } from '../models/BikeElement';

@Injectable()
export class BikeElementService{
  elementApiUrl = 'http://localhost:3000/bikes'
  constructor(private http:HttpClient){}

  getElements(): Observable<BikeElement[]>{
    return this.http.get<BikeElement[]>(this.elementApiUrl)
  }
}
