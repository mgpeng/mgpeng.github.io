import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { Power } from './power';
import { PowerService } from '../service/power.service';
import { HeroService } from '../service/hero.service';
export declare class HeroFormComponent implements OnInit {
    private _pService;
    private _hService;
    private _r;
    submibtted: boolean;
    data: string;
    onSubmit(d: any): void;
    constructor(_pService: PowerService, _hService: HeroService, _r: Router);
    powers: Power[];
    heroes: Hero[];
    model: Hero;
    maxId: number;
    ngOnInit(): void;
    diagnostic: string;
    goBack(): void;
}
