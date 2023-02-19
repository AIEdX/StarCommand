export declare const IO: {
    scene: {
        ctx: CanvasRenderingContext2D;
        dimensions: {
            width: number;
            height: number;
        };
        font: {
            size: number;
            padding: number;
        };
        startingY: number;
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
    console: {
        consoleMarker: string;
        acitveText: string;
        activeTextCursor: {
            position: number;
        };
        text: string[];
        startIndex: number;
        textIndex: number;
        maxLines: number;
        history: string[];
        historyIndex: number;
        $INIT(): void;
        centerAtBottom(): void;
        clearActiveText(): void;
        clearHistory(): void;
        clear(): void;
        addToActiveText(char: string): void;
        removeFromActiveText(): void;
        addText(text: string): void;
        addActiveText(): void;
        moveCursor(direction: "left" | "right" | "up" | "down", scroll?: boolean): void;
        commit(): void;
        getCursorPosition(ctx: CanvasRenderingContext2D): number;
        getActiveText(cursor?: boolean): string[];
    };
    displayText(text: string): void;
    error(text: string): void;
    clear(): void;
    exit(): void;
};
