import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentElement } from '../models/RentElement';

@Injectable()
export class RentElementService{
  elementApiUrl = 'http://localhost:3000/rents'
  constructor(private http:HttpClient){}

  getElements(): Observable<RentElement[]>{
    return this.http.get<RentElement[]>(this.elementApiUrl)
  }
}
