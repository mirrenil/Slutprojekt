class Barricade {
  //  private size: p5.Vector;

  //   constructor(size: p5.Vector) {
  //     this.size = size; 
  //   }
  public x: p5.Vector;
  private imageX: p5.Image;
  private size: p5.Vector;
  constructor(x: number, y: number, width: number, height: number, imageX: p5.Image) {
    // this.size = size;
    // super(barricade)
  }

  public draw() {
    image(barricade, imageX * x + width * .5, height * .15, imageX, imageY)
  }

  barricadeShape() {

  }

  breakBarricade() {

  }
}