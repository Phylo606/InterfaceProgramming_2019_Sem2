import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Planet } from './planet';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(
    private http: HttpClient
  ) { }

  getPlanets (): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.planetsUrl)
      .pipe(
        tap(_ => this.log('fetched planets')),
        catchError(this.handleError<Planet[]>('getHeroes', []))
      );
  }

  getPlanet(: number);

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
