class Game {
private gameObjects: GameObject[]; 

  constructor() {
    this.gameObjects = [
      new GameObject(width * 0.5, height - 120, 100, 120, images.player), 
      new GameObject(200, 80, 50, 50, images.star),
    ];
  }

  public update() {

  }

  public draw() {
    background("#9bf");
    
    for (const gameObject of this.gameObjects) {
      gameObject.draw();
    }
  }

}
