export interface IEasingFunction {
    /**
     *
     * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
     * or http://gizma.com/easing/
     * @param t current time
     * @param b beginning value
     * @param c change In value
     * @param d duration
     */
    (t: number, b: number, c: number, d: number): number;
}
export declare class PageScrollConfig {
    private static _easingFunction;
    static _interval: number;
    static defaultDuration: number;
    static defaultScrollOffset: number;
    static defaultEasingFunction: IEasingFunction;
}
