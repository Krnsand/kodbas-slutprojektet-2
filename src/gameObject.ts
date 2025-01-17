class GameObject {
    private position: p5.Vector;
    private size: p5.Vector;
    private image: p5.Image;

    constructor(x: number, y: number, width: number, height: number, image: p5.Image) {
        this.position = createVector(x, y);
        this.size = createVector(width, height);
        this.image = image;
    }

    public draw() {
        push();
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();

    }
}
