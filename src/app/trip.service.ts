import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private create_url: string = "http://localhost:52623/api/trip/Create";
  private update_url: string = "http://localhost:52623/api/trip/Update";
  private email_url: string = "http://localhost:52623/api/Email/Send";
  constructor(private _http: HttpClient) { }

  create(obj){
    return this._http.post<any>(this.create_url, obj);
  }
  update(obj){
    return this._http.post<any>(this.update_url, obj);
  }
  email(obj){
    return this._http.post<any>(this.email_url, obj);
  }
}
