import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { HEROES, HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }

  createDb() {
    return {
      heroes:HEROES
    };
  }
}
