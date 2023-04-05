import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserElementService } from 'src/app/services/userElement.service';
import { RentElement } from '../models/RentElement';
import { BikeElementService } from './bikeElement.service';

@Injectable({
  providedIn: 'root'
})
export class RentElementService {

  elementApiUrl = 'http://localhost:3000/rents/'
  constructor(
    private userElementService: UserElementService,
    // private bikeElementService: BikeElementService,
    private http:HttpClient){}

  getAll(): Observable<RentElement[]>{
    return this.http.get<RentElement[]>(this.elementApiUrl)
  }

  getById(id: number): Observable<RentElement> {
    return this.http.get<RentElement>(`${this.elementApiUrl}${id}`)
  }

  create(element: RentElement): Observable<RentElement> {
    return this.http.post<RentElement>(this.elementApiUrl, element);
  }

  edit(element: RentElement): Observable<RentElement> {
    return this.http.put<RentElement>(`${this.elementApiUrl}${element.id}`, element);
  }

  delete(id: number): Observable<RentElement> {
    return this.http.delete<RentElement>(`${this.elementApiUrl}${id}`);
  }
}
