var rect1,rect2,rect3,rect4,rect5,rect6;

function setup(){
  createCanvas(721,460);
  rect1=createSprite(120,255,80,320);
  rect1.debug=true;

  rect2=createSprite(125,235,40,50);
  rect2.debug=true;

  rect3=createSprite(350,290,390,240);
  rect3.debug=true;
  
  rect4=createSprite(600,255,80,320);
  rect4.debug=true;

  rect5=createSprite(600,255,40,50);
  rect5.debug=true;

  rect6=createSprite(355,355,120,120);
  rect6.debug=true;
}

function draw() {
  backgroud(100);
  

  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();

  drawsprites();
  
}