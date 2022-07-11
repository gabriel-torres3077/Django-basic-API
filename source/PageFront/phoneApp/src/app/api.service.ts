import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  APIUrl = 'http://127.0.0.1:8000/api/'
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http:HttpClient) { }

  getAllPhones(): Observable<any>{
    return this.http.get(this.APIUrl + 'produto/', {headers: this.httpHeaders});
  }
  getOnePhone(id): Observable<any>{
    return this.http.get(this.APIUrl + 'produto/' + id + '/', {headers: this.httpHeaders});
  }
}


