import {GameEntity} from '../interfaces/gameEntity';

export class Player implements GameEntity {

    private _x: number;
    private _y: number;
    private _size: number;
    private _avanza: number;
    private _spin: number;
    private _rotationAngle: number;
    private _speed: number;
    private _spinSpeed: number;
    private _color: number;

    constructor(x: number, y: number, size: number) {
        this._x = x;
        this._y = y;
        this._size = size;
    }

    init(): void {
        document.addEventListener('keydown', this.move.bind(this));
        document.addEventListener('keyup', this.stop.bind(this));
    }

    move(event: KeyboardEvent): void {
        switch(event.keyCode) {
            case 38:
            // Arriba
            this._avanza = 1;
            break;
        case 40:
            // Abajo
            this._avanza = -1;
            break;
        case 39:
            // Derecha
            this._spin = 1;
            break;
        case 37:
            // Izquierda
            this._spin = -1;
            break;
        }
    }

    stop(event: KeyboardEvent): void {
        switch( event.keyCode ) {
            case 38:
                // Arriba
                this._avanza = 0;
                break;
            case 40:
                // Abajo
                this._avanza = 0;
                break;
            case 39:
                // Derecha
                this._spin = 0;
                break;
            case 37:
                // Izquierda
                this._spin = 0;
                break;
        }
    }

    collision(): boolean {
        return true;
    }

    normalizeAngle(): number {
        return 0;
    }

    update(delta: number): void {
        throw new Error("Method not implemented.");
    }
    draw(ctx: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}