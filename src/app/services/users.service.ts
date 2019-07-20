import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpHeaders, HttpCLient} from  '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { User } from 'model/user';


@Injectable({
  providedIn: 'root'
})


const baseUrl = "http://localhost:3000"'
const httpHeaders = new HttpHeaders();


export class UsersService {

    constructor(private http: HttpClient ) { }

    getHeroes(): Observable<User[]> {
        this.http.get(`${baseUrl}/users`).pipe(
           map.data((data: User[])) => (
             // could be use "tap" if no value will process/reassign
            return data;
           )
        );
    }
}
