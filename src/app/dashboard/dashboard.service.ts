import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DashboardService {

 private loginUrl = localStorage.getItem('API_URL') + "/api/login";
 private registerNewUrl = localStorage.getItem('API_URL') + "/api/register/new";
 private registerJoinUrl = localStorage.getItem('API_URL') + "/api/register/join";

 constructor(
   private http: Http
 ) {  }

 getCoordinates(): Observable<Object[]> {
    // var urlParams = '?token=' + localStorage.getItem("token");
    var url = 'https://cart-monkey.herokuapp.com/test'
    return this.http.get(url).map(this.extractData).catch(this.handleError);
  }

 //Extract the home data from the JSON Response
 private extractData(res: Response) {
   let JSONresponse = res.json();
   return JSONresponse || {};
 }

 //Handle the error and return the error object
 private handleError(res: Response) {
   let JSONresponse = res.json();
   return Observable.throw(JSONresponse);
 }
}
