export declare const Scene: {
    ctx: CanvasRenderingContext2D;
    dimensions: {
        width: number;
        height: number;
    };
    font: {
        size: number;
        padding: number;
    };
    _bgColor: string;
    $INIT(context: CanvasRenderingContext2D): void;
    _setStyle(): void;
    _setActiveStyle(): void;
    renderLog(): void;
    _processText(text: string): string[];
    fullReRender(): void;
    setOpacity(value: number): void;
    clearCanvas(): void;
    clearLine(y: number): void;
    renderConsole(): void;
    resize(width: number, height: number): void;
};
