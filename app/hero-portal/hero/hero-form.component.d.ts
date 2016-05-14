import { Hero } from './hero';
import { Power } from './power';
import { PowerService } from '../service/power.service';
import { HeroService } from '../service/hero.service';
export declare class HeroFormComponent {
    private _pService;
    private _hService;
    submibtted: boolean;
    data: string;
    onSubmit(d: any): void;
    constructor(_pService: PowerService, _hService: HeroService);
    powers: Power[];
    heroes: Hero[];
    model: Hero;
    maxId: number;
    ngOnInit(): void;
    diagnostic: string;
    goBack(): void;
}
