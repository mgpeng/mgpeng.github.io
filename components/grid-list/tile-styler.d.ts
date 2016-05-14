import { MdGridTile } from './grid-tile';
import { TileCoordinator } from './tile-coordinator';
import { Dir } from '../../core/rtl/dir';
export declare class TileStyler {
    _gutterSize: string;
    _rows: number;
    _rowspan: number;
    _cols: number;
    _dir: Dir;
    /** Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     * @internal
     * */
    init(_gutterSize: string, tracker: TileCoordinator, cols: number, dir: Dir): void;
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @internal
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent: number, gutterFraction: number): string;
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @internal
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize: string, offset: number): string;
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @internal
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize: string, span: number): string;
    /** Gets the style properties to be applied to a tile for the given row and column index.
     * @internal
     */
    setStyle(tile: MdGridTile, rowIndex: number, colIndex: number): void;
    /** Sets the horizontal placement of the tile in the list.
     * @internal
     */
    setColStyles(tile: MdGridTile, colIndex: number, percentWidth: number, gutterWidth: number): void;
    /** Sets the vertical placement of the tile in the list.
     * This method will be implemented by each type of TileStyler.
     * @internal
     */
    setRowStyles(tile: MdGridTile, rowIndex: number, percentWidth: number, gutterWidth: number): void;
    /** Calculates the computed height and returns the correct style property to set.
     * This method will be implemented by each type of TileStyler.
     * @internal
     */
    getComputedHeight(): [string, string];
}
export declare class FixedTileStyler extends TileStyler {
    fixedRowHeight: string;
    constructor(fixedRowHeight: string);
    /** @internal */
    init(gutterSize: string, tracker: TileCoordinator, cols: number, dir: Dir): void;
    /** @internal */
    setRowStyles(tile: MdGridTile, rowIndex: number, percentWidth: number, gutterWidth: number): void;
    /** @internal */
    getComputedHeight(): [string, string];
}
export declare class RatioTileStyler extends TileStyler {
    /** Ratio width:height given by user to determine row height.*/
    rowHeightRatio: number;
    baseTileHeight: string;
    constructor(value: string);
    /** @internal */
    setRowStyles(tile: MdGridTile, rowIndex: number, percentWidth: number, gutterWidth: number): void;
    /** @internal */
    getComputedHeight(): [string, string];
    /** @internal */
    private _parseRatio(value);
}
export declare class FitTileStyler extends TileStyler {
    /** @internal */
    setRowStyles(tile: MdGridTile, rowIndex: number, percentWidth: number, gutterWidth: number): void;
}
