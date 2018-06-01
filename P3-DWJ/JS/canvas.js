class Canvas {

  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.clearButton = document.querySelector('#clear-canvas');
    this.bookButton = document.querySelector('#book-btn');
    this.context.lineWidth = 3;
    this.isDrawing = false;
    this.clearCanvas();
    this.initMouse();
  }

  initMouse() {
    this.canvas.addEventListener("mousedown", (e) => this.start(this.getPositionSouris(e)));
    this.canvas.addEventListener("mouseup", (e) => this.stop());
    this.canvas.addEventListener("mousemove", (e) => this.move(this.getPositionSouris(e)));
    this.clearButton.addEventListener('click', () => this.clearCanvas());
  }

  /*
  *
  * Récupère la position du curseur relative au Canvas!!
  * */
  getPosition(pos) {
    const canvas = this.canvas.getBoundingClientRect(); //va chercher la position relative et la taille de l'élément par rapport à sa zone d'affichage
    const x = (pos.x - canvas.left) / (canvas.right - canvas.left) * this.canvas.width; //récupère la position exacte de la souris en X
    const y = (pos.y - canvas.top) / (canvas.bottom - canvas.top) * this.canvas.height; //idem en Y
    return {x, y};
  }

  getPositionSouris(e) {// recupere la position du click dans le nav
    return this.getPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  start(position) {
    const {x, y} = position;
    this.context.moveTo(x, y); //Positionne le curseur
    this.context.beginPath(); // Commencer un nouveau dessin
    this.isDrawing = true;
  }

  stop() {
    this.isDrawing = false;
    this.bookButton.style.display = 'block';
  }

  move(position) {
    if (this.isDrawing) {
      const {x, y} = position;
      this.context.lineTo(x, y); // On ajoute un nouveau point
      this.context.stroke(); // On dessine
    }
  }

  clearCanvas() {
    this.bookButton.style.display = 'none';
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

}
