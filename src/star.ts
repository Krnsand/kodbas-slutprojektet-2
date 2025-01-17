class Star extends GameObject {
    constructor() {
        super(random(width), -50, 50, 50, 0, random(3, 5), images.star);
    }
}