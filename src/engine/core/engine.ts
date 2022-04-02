import { Renderer } from './renderer';
import { SceneManager } from './sceneManager';

export class Engine {

    private _gameID: number;
    private _interval: number;
    private _fps: number;
    private _running: boolean;
    private _delta: number;
    private _lastTime: number;
    private _currentTime: number;
    private _firstScene: number;
    private _renderer: Renderer;
    private _sceneManager: SceneManager;

    constructor(fps: number = 60) {
        this._fps = fps;
        this._interval = 1000 / this._fps;
        this._delta = 0;
        this._currentTime = 0;
        this._lastTime = (new Date()).getTime();
        this._firstScene = 1;
        this._renderer = new Renderer();
        this._sceneManager = new SceneManager(this._firstScene);
    }

    start(): void {
        this._running = true;
        this.gameLoop();
    }

    gameLoop(): void {
        this._gameID = window.requestAnimationFrame(() => { this.gameLoop() });
        this._currentTime = (new Date()).getTime();
        this._delta = this._currentTime - this._lastTime;
        if(this._delta > this._interval) {
            this._sceneManager.update(this._delta);
            this._sceneManager.draw(this._renderer.context);
            this._lastTime = this._currentTime - (this._delta % this._interval);
        }
        if(!this._running)
            cancelAnimationFrame(this._gameID);
    }
}