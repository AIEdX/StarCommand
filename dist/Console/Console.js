import { TextProcessor } from "../Util/TextProcessor.js";
export const Console = {
    consoleMarker: "[★]> ",
    acitveText: "",
    activeTextCursor: {
        position: 0,
    },
    clearActiveText() {
        this.acitveText = "";
        this.activeTextCursor.position = 0;
    },
    addToActiveText(char) {
        this.acitveText =
            this.acitveText.substring(0, this.activeTextCursor.position) +
                char +
                this.acitveText.substring(this.activeTextCursor.position, this.acitveText.length);
        this.moveCursor("right");
    },
    removeFromActiveText() {
        if (this.activeTextCursor.position - 1 < 0)
            return;
        this.acitveText =
            this.acitveText.substring(0, this.activeTextCursor.position - 1) +
                this.acitveText.substring(this.activeTextCursor.position, this.acitveText.length);
        this.moveCursor("left");
    },
    moveCursor(direction) {
        if (direction == "left") {
            if (this.activeTextCursor.position == 0)
                return;
            this.activeTextCursor.position--;
        }
        if (direction == "right") {
            if (this.activeTextCursor.position >= this.acitveText.length)
                return;
            this.activeTextCursor.position++;
        }
    },
    getActiveText(cursor = true) {
        let activeText = this.acitveText;
        if (cursor) {
            activeText =
                this.acitveText.substring(0, this.activeTextCursor.position) +
                    "|" +
                    this.acitveText.substring(this.activeTextCursor.position, this.acitveText.length);
        }
        let text = `${this.consoleMarker} ${activeText}`;
        return TextProcessor.processText(text);
    },
};
