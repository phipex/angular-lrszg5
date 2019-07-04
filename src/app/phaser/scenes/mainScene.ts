export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("logo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOp_MJQiR1nJ4EHh0fpBTGdwpbyypoHDZn2nLaikd_30AEGN7cA");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(400, 300, "logo");
  }
}