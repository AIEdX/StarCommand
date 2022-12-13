export declare const Console: {
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
    clearActiveText(): void;
    clearHistory(): void;
    clear(): void;
    addToActiveText(char: string): void;
    removeFromActiveText(): void;
    addText(text: string): void;
    addActiveText(): void;
    moveCursor(direction: "left" | "right" | "up" | "down", scroll?: boolean): void;
    commit(): void;
    getActiveText(cursor?: boolean): string[];
};
