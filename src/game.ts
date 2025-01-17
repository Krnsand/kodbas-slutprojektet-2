class Game {
private gameObjects: GameObject[]; 
private starSpawnTimer: number;

  constructor() {
    this.gameObjects = [new Player()];
    this.starSpawnTimer = 0;
  }

  public update() {
    for (const gameObject of this.gameObjects) {
      gameObject.update();
    }

    this.spawnStars();
  }

  private spawnStars() {
    if (this.starSpawnTimer <= 0) {
      this.gameObjects.push(new Star());
      this.starSpawnTimer = 400;
    }

    this.starSpawnTimer -= deltaTime; //timer till våt spel!!!
  }

  public draw() {
    background("#9bf");
    
    for (const gameObject of this.gameObjects) {
      gameObject.draw();
    }
  }

}
