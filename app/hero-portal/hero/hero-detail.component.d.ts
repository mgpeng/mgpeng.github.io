import { OnInit } from '@angular/core';
import { Router, RouteSegment, CanDeactivate, RouteTree } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from '../service/hero.service';
import { DialogService } from '../../app-service/dialog.service';
export declare class HeroDetailComponent implements OnInit, CanDeactivate {
    private _hService;
    private _dService;
    private _rSegment;
    private _r;
    hero: Hero;
    unchangeStr: string;
    constructor(_hService: HeroService, _dService: DialogService, _rSegment: RouteSegment, _r: Router);
    ngOnInit(): void;
    goBack(): void;
    reset(): void;
    routerCanDeactivate(next: RouteTree, prev: RouteTree): any;
}
