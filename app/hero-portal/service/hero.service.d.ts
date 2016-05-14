import { Hero } from '../hero/hero';
export declare class HeroService {
    getHeroes: () => Promise<Hero[]>;
    getHeroesSlowly(): Promise<Hero[]>;
    getHero(id: number): Promise<Hero>;
    getMaxIdHero(): Promise<number>;
}
