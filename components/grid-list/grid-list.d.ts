import { AfterContentChecked, OnInit, QueryList, Renderer, ElementRef } from '@angular/core';
import { MdGridTile } from './grid-tile';
import { TileStyler } from './tile-styler';
import { Dir } from '../../core/rtl/dir';
export declare class MdGridList implements OnInit, AfterContentChecked {
    private _renderer;
    private _element;
    private _dir;
    /** Number of columns being rendered. */
    _cols: number;
    /** Row height value passed in by user. This can be one of three types:
     * - Number value (ex: "100px"):  sets a fixed row height to that value
     * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
     * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
     * */
    _rowHeight: string;
    /** The amount of space between tiles. This will be something like '5px' or '2em'. */
    _gutter: string;
    /** Sets position and size styles for a tile */
    _tileStyler: TileStyler;
    /** Query list of tiles that are being rendered. */
    _tiles: QueryList<MdGridTile>;
    constructor(_renderer: Renderer, _element: ElementRef, _dir: Dir);
    cols: any;
    gutterSize: any;
    /** Set internal representation of row height from the user-provided value. */
    rowHeight: string | number;
    ngOnInit(): void;
    /** The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently. */
    ngAfterContentChecked(): void;
    /** Throw a friendly error if cols property is missing */
    private _checkCols();
    /** Default to equal width:height if rowHeight property is missing */
    private _checkRowHeight();
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    private _setTileStyler();
    /** Computes and applies the size and position for all children grid tiles. */
    private _layoutTiles();
    /** Sets style on the main grid-list element, given the style name and value.
     *  @internal
     */
    setListStyle(style: [string, string]): void;
}
/** Converts values into strings. Falsy values become empty strings.
 * @internal
 */
export declare function coerceToString(value: string | number): string;
/** Converts a value that might be a string into a number.
 * @internal
 */
export declare function coerceToNumber(value: string | number): number;
export declare const MD_GRID_LIST_DIRECTIVES: any[];
