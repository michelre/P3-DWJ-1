class Canvas {

  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
	this.initMouse();
	this.context.lineWidth = 10;

	  
  }

  initMouse(){
    this.canvas.addEventListener("mousedown", (e) => {
      if (e.buttons === 1) this.start(this.positionSouris(e))
    });
    this.canvas.addEventListener("mouseup", (e) => {
      this.stop(this.positionSouris(e));
    });
    this.canvas.addEventListener("mousemove", (e) => {
      this.move(this.positionSouris(e));	
		
	});	
}
		positionSouris(e){// recupere la position du click dans le nav
		return this.position({
			x:e.clientX,
			y:e.clientY,

		});
}			
			
		trait(pos1, pos2){
			this.context.beginPath();
			this.context.moveTo(pos1.x,pos1.y);//point de départ
			this.context.moveTo(pos2.x,pos2.y);//point d'arriver
			this.context.strokeStyle="Black";//color du trait en noir
			this.context.stroke();//tracer des lignes
		}
			document.getElementById("clear-canvas").addEventListener('click',function(){
				this.context.clearRect(0,0,canvas.width, canvas.height);
			})
	
}