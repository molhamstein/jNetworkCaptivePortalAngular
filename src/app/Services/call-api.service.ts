import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch'; // don't forget this, or you'll get a runtime error
import { catchError } from 'rxjs/operators';


// import 'rxjs/Rx';
import { map, tap } from 'rxjs/operators';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {
  readonly baseUrl = "http://104.217.253.15:8000/api/"



  private errorCode = 0;


  public setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }

  public getErrorCode() {
    return this.errorCode
  }


  // post(url, data) {
  //   return this.http.post(this.baseUrl + url, data)
  //     .pipe(
  //     tap(
  //       (Response: Response) => {
  //         return Response;
  //       })
  //     );
  // }



  post(url, data, token: string = "") {
    let _options = {}
    if (token != "")
      _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token }) };
    return this.http.post(this.baseUrl + url, data, _options)
      .pipe(
      map(res => res),
      catchError(this.handleServerError)
      );
  }

    get(url) {
    return this.http.get(this.baseUrl + url)
      .pipe(
      map(res => res),
      catchError(this.handleServerError)
      );
  }

  handleServerError(error: any) {
    console.log(error.error || error.json() || error);
    return Observable.throw(error.error || error.json() || error || 'Server error');
  }


  constructor(public http: HttpClient) {

  }
}
