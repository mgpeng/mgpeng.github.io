import { OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from '../service/hero.service';
export declare class HeroesComponent implements OnInit {
    private _heroService;
    private _router;
    private _segment;
    heroes: Hero[];
    selectedHero: Hero;
    constructor(_heroService: HeroService, _router: Router, _segment: RouteSegment);
    onSelect(hero: Hero): void;
    getHeroes(): void;
    ngOnInit(): void;
    gotoDetail(): void;
}
