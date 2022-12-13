export const Scene = {
    ctx: {},
    text: [],
    textIndex: 0,
    dimensions: {
        width: 0,
        height: 0,
    },
    font: {
        size: 16,
    },
    $INIT(context) {
        this.ctx = context;
    },
    render() {
        this.ctx.fillStyle = "cyan";
        this.ctx.font = `${this.font.size}px Consolas`;
        let y = this.font.size;
        for (let i = 0; i < this.text.length; i++) {
            const text = this.text[i];
            this.ctx.fillText(text, 0, y);
            y += this.font.size;
        }
    },
    addText(text) {
        this.text.push(text);
    },
    clear() {
        this.ctx.fillStyle = "rgba(0,0,0,0.5)";
        this.ctx.rect(0, 0, this.dimensions.width, this.dimensions.height);
        this.ctx.fill();
    },
    resize(width, height) {
        this.dimensions.width = width;
        this.dimensions.height = height;
    },
};
