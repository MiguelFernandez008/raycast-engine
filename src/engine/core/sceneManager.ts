import { GameEntity } from "../interfaces/gameEntity";

export class SceneManager implements GameEntity {

    private _scene: number;

    constructor(scene: number) {
        this._scene = scene;
    }


    update(delta: number): void {

    }
    draw(ctx: CanvasRenderingContext2D): void {
        
    }
}