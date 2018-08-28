import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES} from "./mokedata-heroes";
import { Observable,of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) {

  }
  getHeros():Observable<Hero[]>{
    this.messageService.add('HeroServie this is a add() methos!');
    return of(HEROES);
  }
  getHero(id : number):Observable<Hero>{
    this.messageService.add('HeroServie: getHero(id) this id:${id}');
    return of(HEROES.find(hero=>hero.id===id));
  }
}
