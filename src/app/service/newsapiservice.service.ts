import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor( private http: HttpClient) { }

  //NewApi Url
  newsapiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=9597434ab03a4d7198ced5820c884a57"


  //techApi Url
  techapiUrl="https://newsapi.org/v2/everything?q=bitcoin&apiKey=9597434ab03a4d7198ced5820c884a57"

  heading(): Observable<any>{
  return this.http.get(this.newsapiUrl);
}

techNews(): Observable<any>{
  return this.http.get(this.techapiUrl);
}
}
