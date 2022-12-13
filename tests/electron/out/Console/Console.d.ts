export declare const Console: {
    consoleMarker: string;
    acitveText: string;
    activeTextCursor: {
        position: number;
    };
    clearActiveText(): void;
    addToActiveText(char: string): void;
    removeFromActiveText(): void;
    moveCursor(direction: "left" | "right"): void;
    getActiveText(cursor?: boolean): string[];
};
