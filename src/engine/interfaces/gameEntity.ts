export interface GameEntity {
    update(delta: number): void,
    draw(ctx: CanvasRenderingContext2D): void
}