import { Injectable } from '@angular/core';
import { concat } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getUsers(){
   return this.http.get('https://reqres.in/api/users');
  }
}
