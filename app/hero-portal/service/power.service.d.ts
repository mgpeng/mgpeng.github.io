import { Power } from '../hero/power';
export declare class PowerService {
    getPowers: () => Promise<Power[]>;
    getPowersSlowly(): Promise<Power[]>;
    getPowerByFirstOrSecond(firstOrSecond: string): Promise<string>;
}
