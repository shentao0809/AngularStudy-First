import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mokedata-heroes';
import { HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero = 'wavesen.shen';
  hero2 : Hero = {
    id : 1707037,
    name : 'wavesen.shen'
  };
  hero3 = HEROES;
  selectedHero :Hero ;
  heros:Hero[];
  onSelect(hero : Hero) : void{
    this.selectedHero=hero;
  }
  getHeros():void{
    this.heroService.getHeros().subscribe(heros=>this.heros=heros);

  }
  constructor(private heroService : HeroService) {

  }

  ngOnInit() {
    this.getHeros();
  }

}
