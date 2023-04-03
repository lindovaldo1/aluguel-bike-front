import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../models/PeriodicElement';

@Injectable()
export class PeriodicElementService{
  elementApiUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient){}

  getElements(): Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(this.elementApiUrl)

  }
}
