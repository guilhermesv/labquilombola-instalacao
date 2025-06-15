let sensor_A;
let sensor_B;
let botao_A;
let botao_B;
let botao_C;
let botao_D;

let camadas;
let mascaras;
let dithering;

let pgs;
let t;

let f; // contador da forma, variavel temporária

function preload() {
  mascaras = []
  for(let i = 0; i < 3; i++) {
    mascaras[i] = {
      "img": loadImage(`mascara-${i}.png`),
      "ativa": false
      };
  }
  mascaras[0].ativa = true;
  // dithering = loadImage("dithering.png");
}

function setup() {

  // To aumentando o canvas no CSS para ganhar perfomance
  createCanvas(windowWidth/2, windowHeight/2);

  pgs = [];
  for(let i = 0; i < 4; i++) {
    pgs[i] = createGraphics(width/8, height/8);
  }

  t = 0;
  camadas = Array(4).fill(true);
  background(0,0,0)

}

function draw() {

  blendMode(BLEND);
  background(0);
  // SENSORES -------------------------------------------/

  // sensor_A = map(mouseX, 0, width, 0, 255);
  sensor_A = contraste(noise(t * 0.3)) * 255;
  sensor_B = map(mouseY, 0, height, 0, 255);
  botao_A = "z";
  botao_B = "x";
  botao_C = "c";
  botao_D = "v";

  // SENSORES -----------------------------------/

  

  // CAMADA SIMPLES ##############################/

  // A -------------------------------------------/

  // blendMode(BLEND);
  // background(0);
  // formas[2](pgs[0], 10, color(0, 255, 0, sensor_A), 0, t);
  // let qtd = 2;
  // let lagura = width/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   let x = i * lagura;
  //   image(pgs[0], x, 0, lagura, height);
  // }
  // cortina_loc(-height/4, height/2, 64, 16, 0.5);
  // cortina_loc(height/4, height/2, 32, 32, 0.5);
  // filtro_mascara();
  // filter(POSTERIZE, 2);

  // D -------------------------------------------/

  // blendMode(BLEND);
  // background(0);
  // colorMode(HSB)
  // formas[6](pgs[0], 2, 0, color(t%255,255,255, 255), t*3);
  // let qtd = 7;
  // let lagura = width/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   let x = i * lagura;
  //   image(pgs[0], x, 0, lagura, height);
  // }
  // cortina(128, 16, 0.5);
  // filtro_mascara();
  // filter(POSTERIZE, 2);

  // CAMADA DUPLA ###############################/

  // A ----------------------------------------- /
  // Esse ficou massa, colocar mais info quando for pra taboa 

  // blendMode(BLEND);
  // background(0);
  // blendMode(DIFFERENCE);
  
  // formas[0](pgs[0], 8, color(0, 255, 0, 255), 0, t * 0.5);
  // image(pgs[0], 0, 0, width, height);
  // formas[2](pgs[1], 10, color(255, 255, 0, 255), 0, t);
  // image(pgs[1], 0, 0, width, height);

  // blendMode(BLEND);
  // cortina(32, 16, 0.5); 
  // filtro_mascara();
  // filter(POSTERIZE, 2);

  // B ----------------------------------------- /

  // blendMode(BLEND);
  // background(0);
  // blendMode(SCREEN);
  
  // formas[2](pgs[0], 1, 0, color(255, 0, 0, 255), t);
  // image(pgs[0], 0, 0, width, height);
  // formas[3](pgs[1], 8, color(0, 255, 255, 255), 0, t * 0.5);
  // image(pgs[1], 0, 0, width, height);

  // blendMode(BLEND);
  // cortina(64, 16, 0.4);
  // filtro_mascara();
  // filter(POSTERIZE, 2);

  // C ----------------------------------------- /

  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  
  formas[5](pgs[0], 8, 0, color(0, 255, 0, 255), t);
  image(pgs[0], 0, 0, width, height);
  formas[2](pgs[1], 4, color(255, 255, 255, 255), 0, t * 0.5);
  
  let qtd = 2;
  let largura = width/qtd;
  for(let i = 0; i < qtd; i++) {
    let x = i * largura;
    image(pgs[1], x, 0, largura, height);
  }

  blendMode(BLEND);
  cortina(64, 32, 0.3);

  filtro_mascara();
  filter(POSTERIZE, 2);

  
  // CAMADA 3 + #################################/

  // A ----------------------------------------- /
  // blendMode(BLEND);
  // background(0);
  // blendMode(DIFFERENCE);

  // formas[6](pgs[0], 4, color(255, 0, 0, sensor_A), 0, t * 0.5);
  // image(pgs[0], 0, 0, width, height);

  // formas[2](pgs[1], 8, color(0, 255, 0, sensor_A), 0, t * 0.5);
  // image(pgs[1], 0, 0, width, height);

  // formas[0](pgs[2], 8, color(0, 255, 255, sensor_A), 0, t * 0.5);
  // image(pgs[2], 0, 0, width, height);

  // formas[4](pgs[3], 4, color(255, 0, 255, sensor_A), 0, -t * 0.5);
  // image(pgs[3], 0, 0, width/2, height);
  // image(pgs[3], width/2, 0, width/2, height);

  // filtro_mascara();
  // filter(POSTERIZE, 2);

  // D ----------------------------------------- /
  // Esse ficou bem legal
  // blendMode(BLEND);
  // background(0)
  // blendMode(SCREEN);

  
  // formas[5](pgs[0], 4, color(255, 0, 255, sensor_A), 0, t);
  // let qtd = 2;
  // let lagura = width/qtd;
  // let altura = height/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   for(let j = 0; j < qtd; j++) {
  //   let x = i * lagura;
  //   let y = j * altura;
  //   image(pgs[0], x, y, lagura, altura);
  //   }
  // }

  // formas[2](pgs[1], 8, color(0, 255, 255, sensor_A), 0, t);
  // image(pgs[1], 0, 0, width, height);

  // formas[2](pgs[2], 8, color(255, 255, 0, sensor_A), 0, t);
  // qtd = 4;
  // lagura = width/qtd;
  // altura = height/qtd;
  // y_offset = (t * 2) % height;
  // for(let i = 0; i < qtd; i++) {
  //   for(let j = 0; j < qtd; j++) {
  //   let x = i * lagura;
  //   let y = j * altura;
  //   image(pgs[2], x, y + y_offset, lagura, altura);
  //   image(pgs[2], x, y + y_offset - height, lagura, altura);
  //   }
  // } 
  // filtro_mascara();
  // blendMode(BLEND);
  // cortina(40, 10, 0.5);
  // filter(POSTERIZE, 2);

  // F ----------------------------------------- /

  // blendMode(BLEND);
  // background(0)  
  // blendMode(SCREEN);

  // let qtd = 2;
  // let lagura = width/qtd;
  // let altura = height/qtd;

  // let sensor_A_n = sensor_A/255 + 0.6;
  // let sensor_B_n = sensor_A/255 + 0.1;

  // for(let i = 0; i < qtd; i++) {
  //   for(let j = 0; j < qtd; j++) {
  //     let x = i * lagura;
  //     let y = j * altura;
  
  //     let valor = noise(x * 0.01, y * 0.01, t*0.1) * sensor_A_n;
  //     formas[2](pgs[2], 10, color(0,0,300*valor, 255), 0, t * 0.2);
  //     image(pgs[2], x, y, lagura, altura);
     
  //   }
  // }

  // qtd = 4;
  // lagura = width/qtd;
  // altura = height/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   for(let j = 0; j < qtd; j++) {
  //     let x = i * lagura;
  //     let y = j * altura;
      
  //     let valor = noise(x * 0.05, y * 0.05, t*0.1) * sensor_B_n;
  //     formas[6](pgs[0], 1, color(300*valor,0,0), 0, t);
  //     image(pgs[0], x, y, lagura, altura);
      
  //     valor = noise(x * 0.01, y * 0.05, t*0.1) * sensor_A_n;
  //     formas[2](pgs[1], 5, color(0,300*valor,0), 0, t);
  //     image(pgs[1], x, y, lagura, altura);
     
  //   }
  // }

  // blendMode(BLEND);
  // cortina(40, 10, 0.5);
  // // cortina(30, 20, 0.5);
  // filtro_mascara();
  // filter(POSTERIZE, 2);

  t += 0.1;
}


function keyPressed(e) {
  if (key === botao_A) {
    camadas[0] = !camadas[0];
  }

  if (key === botao_B) {
    camadas[1] = !camadas[1];
  }

  if (key === botao_C) {
    camadas[2] = !camadas[2];
  }

  if (key === botao_D) {
    camadas[3] = !camadas[3];
  }

  if (key == 1) {
    mascaras[0].ativa = !mascaras[0].ativa;
  }

  if (key == 2) {
    mascaras[1].ativa = !mascaras[1].ativa;
  }

  if (key == 3) {
    mascaras[2].ativa = !mascaras[2].ativa;
  }

  console.log(e);
}


function filtro_mascara() {
  blendMode(MULTIPLY);
  for(let i = 0; i < mascaras.length; i++) {
    if(mascaras[i].ativa) {
      image(mascaras[i].img, 0, 0, width, height);
    }
  }
}

function contraste(n) {
  let contrastedValue = 1 / (1 + exp(-10 * (n - 0.5)));
  return contrastedValue;
}