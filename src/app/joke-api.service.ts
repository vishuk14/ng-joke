import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Joke } from './joke'

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  private urlAPI = 'https://v2.jokeapi.dev/joke/any'

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<Joke> {
    return this.http.get<Joke>(`${this.urlAPI}`)  
  }





}

