// const Engine = Matter.Engine; 
// const World = Matter.World; 
// const Bodies = Matter.Bodies; 
// const Constraint = Matter.Constraint;
var vidafogo = 100;
var vidaagua = 100;
var fogo;
var agua;
var imagemfogo,imagemvento;
var fundoimg;
var ground;
var fogo_parado, fogo_andando,fogo_pulando1, fogo_pulando_2;
var agua_parado, agua_andando,agua_pulando;
var barreira;
var fogo_ataque1;
var agua_ataque1;
function preload(){
    fundoimg = loadImage("game_background_4.png")
    agua_parado = loadAnimation("Elementals_water_priestess_basic_v1.0/png/01_idle/idle_1.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_2.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_3.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_4.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_5.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_6.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_7.png",
    "Elementals_water_priestess_basic_v1.0/png/01_idle/idle_8.png")

    agua_andando = loadAnimation("Elementals_water_priestess_basic_v1.0/png/02_walk/walk_1.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_2.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_3.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_4.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_5.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_6.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_7.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_8.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_9.png",
    "Elementals_water_priestess_basic_v1.0/png/02_walk/walk_10.png")

    agua_ataque1 = loadAnimation("Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_1.png",
    "Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_2.png",
    "Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_3.png",
    "Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_4.png",
    "Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_5.png",
    "Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_6.png",
    "Elementals_water_priestess_basic_v1.0/png/07_1_atk/1_atk_7.png",)

    agua_pulando = loadAnimation("Elementals_water_priestess_basic_v1.0/png/04_j_up/j_up_1.png",
    "Elementals_water_priestess_basic_v1.0/png/04_j_up/j_up_2.png",
    "Elementals_water_priestess_basic_v1.0/png/04_j_up/j_up_3.png")
    fogo_parado = loadAnimation("Elementals_fire_knight_basic_v1.0/png/01_idle/idle_1.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_2.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_3.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_4.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_5.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_6.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_7.png",
    "Elementals_fire_knight_basic_v1.0/png/01_idle/idle_8.png");
    
    fogo_andando = loadAnimation("Elementals_fire_knight_basic_v1.0/png/02_run/run_1.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_2.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_3.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_4.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_5.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_6.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_7.png",
    "Elementals_fire_knight_basic_v1.0/png/02_run/run_8.png");
    
    fogo_pulando1 = loadAnimation("Elementals_fire_knight_basic_v1.0/png/03_jump_up/jump_up_1.png", 
    "Elementals_fire_knight_basic_v1.0/png/03_jump_up/jump_up_2.png",
    "Elementals_fire_knight_basic_v1.0/png/03_jump_up/jump_up_3.png",
)
    fogo_pulando_2 = loadAnimation("Elementals_fire_knight_basic_v1.0/png/03_jump_down/jump_down_1.png",
    "Elementals_fire_knight_basic_v1.0/png/03_jump_down/jump_down_2.png",
    "Elementals_fire_knight_basic_v1.0/png/03_jump_down/jump_down_3.png")

    fogo_ataque1 = loadAnimation("Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_1.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_2.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_3.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_4.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_5.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_6.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_7.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_8.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_9.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_10.png",
    "Elementals_fire_knight_basic_v1.0/png/05_1_atk/1_atk_11.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
   ground = createSprite(0, windowHeight, windowWidth +950, 20); 
   fogo = createSprite(200,550,50,50) 
   agua = createSprite(600, 550,50,50)
   fogo.addAnimation("parado",fogo_parado)
   fogo.addAnimation("andando", fogo_andando)
   fogo.addAnimation("pulando",fogo_pulando1)
   fogo.addAnimation("caindo",fogo_pulando_2)
    fogo.addAnimation("atacando",fogo_ataque1)


   agua.addAnimation("parado",agua_parado)
   agua.addAnimation("andando", agua_andando)
   agua.addAnimation("pulando",agua_pulando)
  fogo.debug = true
  agua.debug = true

  agua.setCollider("rectangle", 0, 40, 20, 30)
  fogo.setCollider("rectangle", 0, 40, 20, 35)

   fogo.scale = 3.0;
   agua.scale = 3.0;
   barreira = createSprite(windowWidth/2,400,windowWidth,20)
    barreira.visible = false;
}
function draw(){
    background(fundoimg)
    fogo.velocityY += 0.8;
    agua.velocityY += 0.8;
    textSize(30)
    fill("orange")
    text("Vida Fogo: "+vidafogo,50,windowHeight/2 )

    textSize(30)
    fill("cyan")
    text("Vida Água: "+vidaagua,1400,windowHeight/2 )

    if(keyDown("e")){
        fogo.changeAnimation("atacando",fogo_ataque1)
        console.log("atacando")
        fogo.x += 1;
    }
    if(keyDown(RIGHT_ARROW)){
        agua.changeAnimation("andando", agua_andando);
        agua.x += 10;
    }
    else{
        agua.changeAnimation("parado",agua_parado);
    }
    if(keyDown(LEFT_ARROW)){
        agua.changeAnimation("andando", agua_andando);
        agua.x += -10;
    }
    else{
        agua.changeAnimation("parado",agua_parado);
    }

    if(keyDown(UP_ARROW) && agua.y > 150){
        agua.changeAnimation("pulando",agua_pulando)
           agua.velocityY = -10
        }

    if(keyDown("d")){
        fogo.changeAnimation("andando", fogo_andando);
        fogo.x += 10;
    }
    else{
        fogo.changeAnimation("parado",fogo_parado);
    }

    if(keyDown("a")){
        fogo.changeAnimation("andando", fogo_andando);
        fogo.x += -10;
    }
    else{
        fogo.changeAnimation("parado",fogo_parado);
    }
    if(fogo.y > windowHeight-100){
        fogo.changeAnimation("caindo",fogo_pulando_2)
    }

   if(keyDown("w") && fogo.y > 150){
    fogo.changeAnimation("pulando",fogo_pulando1)
       fogo.velocityY = -10
    }
           
    fogo.collide(barreira);
    fogo.collide(ground);
    agua.collide(ground);
    agua.collide(barreira);
 
    fogo.collide(agua);
    agua.collide(fogo);
    drawSprites();
}
