import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ITrack } from './track';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private _url: string = "http://localhost:52623/api/tracks";
  constructor(private http: HttpClient) { }

  getTracks(): Observable<ITrack[]>{
    return this.http.get<ITrack[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
