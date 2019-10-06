import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IDest } from './destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private _url: string = "http://localhost:52623/api/Destinations";
  constructor(private http: HttpClient) { }

  getDestination(): Observable<IDest[]>{
    return this.http.get<IDest[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
