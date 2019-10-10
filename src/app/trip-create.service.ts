import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripCreateService {

  private _url: string = "http://localhost:52623/api/trip/Create";
  constructor(private _http: HttpClient) { }

  create(obj){
    return this._http.post<any>(this._url, obj);
  }
}
