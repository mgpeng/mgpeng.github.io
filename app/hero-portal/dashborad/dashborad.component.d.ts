import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero';
import { HeroService } from '../service/hero.service';
export declare class DashboradComponent implements OnInit {
    private _hService;
    private _router;
    heroes: Hero[];
    constructor(_hService: HeroService, _router: Router);
    ngOnInit(): void;
    gotoDetail(hero: Hero): void;
}
