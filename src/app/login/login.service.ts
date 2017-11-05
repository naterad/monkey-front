import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//Create the service
@Injectable()
export class LoginService {

 private loginUrl = localStorage.getItem('API_URL') + "/api/login";
 private registerNewUrl = localStorage.getItem('API_URL') + "/api/register/new";
 private registerJoinUrl = localStorage.getItem('API_URL') + "/api/register/join";

 constructor(
   private http: Http
 ) {  }

 login(email, password): Observable<Object> {
   let body = {email_address: email, password: password};
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(this.loginUrl, body, options).map(this.extractData).catch(this.handleError);
 }

 registerNew(name, email, first_name, last_name, password): Observable<Object> {
   let body = {name:name, email_address: email, first_name:first_name, last_name:last_name, password: password};
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(this.registerNewUrl, body, options).map(this.extractData).catch(this.handleError);
 }

 registerJoin(code, email, first_name, last_name, password): Observable<Object> {
   let body = {link:code, email_address: email, first_name:first_name, last_name:last_name, password: password};
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   return this.http.post(this.registerJoinUrl, body, options).map(this.extractData).catch(this.handleError);
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
