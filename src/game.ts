class Game {
private gameObjects: GameObject[]; 

  constructor() {
    this.gameObjects = [new Player()];
  }

  public update() {
    for (const gameObject of this.gameObjects) {
      gameObject.update();
    }
  }

  public draw() {
    background("#9bf");
    
    for (const gameObject of this.gameObjects) {
      gameObject.draw();
    }
  }

}
