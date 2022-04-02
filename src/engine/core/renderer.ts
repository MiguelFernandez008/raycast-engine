export class Renderer {

    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    constructor() {
        this._canvas = document.querySelector('canvas');
        this._context = this._canvas.getContext('2d');
    }

    get canvas() { return this._canvas } 

    get context() { return this._context } 
}