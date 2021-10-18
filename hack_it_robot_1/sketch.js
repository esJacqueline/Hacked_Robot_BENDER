function setup() {
	createCanvas(400, 400);
  }
  
  function draw() {
	background(51);
	strokeWeight(4);
	stroke(51);
	
	//antena tringle
	fill(220);
	triangle(190, 110, 200, 20, 210, 110);
	
	//antena circles bottom then top
	ellipse(200, 110, 40, 20);
	ellipse(200, 30, 30, 30);
	
	//head cirle then rectangle
	ellipse(200,230,180, 240);
	rect(110,230,180, 180);
	
	//eye holders (eye sockets?)
	rect(70, 180, 260, 100, 50);
	fill(51);
	rect(80, 190, 240, 80, 50);
	
	//eyes
	fill(220);
	arc(150, 230, 80, 80, 0, PI + HALF_PI, OPEN);
	arc(250, 230, 80, 80,PI + HALF_PI, PI, OPEN);
	fill(51);
	rect(150, 230, 15, 15);
	rect(250, 230, 15, 15);
	
	//mouth
	fill(255,255,255);
	rect(100, 300, 200, 80, 50);
	
	//teeth verticle then horizontal
	rect(140, 300, 40, 80);
	rect(220, 300, 40, 80);
	line(100, 325, 300, 325);
	line(100, 355, 300, 355);
	
  }
