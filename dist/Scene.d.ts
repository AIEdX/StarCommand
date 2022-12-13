export declare const Scene: {
    ctx: CanvasRenderingContext2D;
    text: string[];
    textIndex: number;
    dimensions: {
        width: number;
        height: number;
    };
    font: {
        size: number;
    };
    $INIT(context: CanvasRenderingContext2D): void;
    render(): void;
    addText(text: string): void;
    clear(): void;
    resize(width: number, height: number): void;
};
