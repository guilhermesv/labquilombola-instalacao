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

}

function draw() {

  // SENSORES -------------------------------------------/

  sensor_A = map(mouseX, 0, width, 0, 255);
  sensor_B = map(mouseY, 0, height, 0, 255);
  botao_A = "z";
  botao_B = "x";
  botao_C = "c";
  botao_D = "v";

  // SENSORES -------------------------------------------/

  blendMode(BLEND);
  background(0);

  // A ----------------------------------------- /
  blendMode(SCREEN);

  if(camadas[0]) { 
    formas[6](pgs[0], 5, color(255, 0, 0, sensor_A), 0, t);
    image(pgs[0], 0, 0, width, height);
  }

  if(camadas[1]) { 
    formas[2](pgs[1], 10, color(0, 255, 0, sensor_A), 0, t);
    image(pgs[1], 0, 0, width, height);
  }

  if(camadas[2]) { 
    formas[0](pgs[2], 10, color(0, 255, 255, sensor_A), 0, t);
    image(pgs[2], 0, 0, width, height);
  }

  if(camadas[3]) {
    formas[4](pgs[3], 10, color(255, 0, 255, sensor_A), 0, -t);
    image(pgs[3], 0, 0, width/2, height);
    image(pgs[3], width/2, 0, width/2, height);
  }

  filtro_mascara();
  filter(BLUR, 1);
  filter(POSTERIZE, 2);

  // B ----------------------------------------- /
  // blendMode(DIFFERENCE);

  // if(camadas[0]) {
  //   // formas[0](pgs[0], 10, sin(frameCount/50) * 255, 0, t);
  //   formas[0](pgs[0], 10, sensor_A, 0, t);
  //   image(pgs[0], 0, 0, width, height);
  // }

  // if(camadas[1]) {
  //   // formas[2](pgs[1], 10, sin(PI/2+frameCount/50) * 255, 0, t);
  //   formas[2](pgs[1], 10, sensor_B, 0, t);
  //   image(pgs[1], 0, 0, width, height);
  // }

  // if(camadas[2]) {
  //   // formas[3](pgs[2], 5, cos(frameCount/50) * 255, 0, t);
  //   formas[3](pgs[2], 5, sensor_A, 0, t);
  //   image(pgs[2], 0, 0, width, height);
  // }
  
  // filter(BLUR, 1);
  // filter(THRESHOLD, 0.2);


  // C ----------------------------------------- /
  // blendMode(SCREEN);
  // formas[6](pgs[0], 2, "#f00", 0, t);
  // formas[2](pgs[1], 10, "#0f0", 0, t);
  // formas[0](pgs[2], 10, "#00f", 0, t);
  
  // let qtd = 4;
  // let lagura = width/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   let x = i * lagura;
  //   image(pgs[0], x, 0, lagura, height);
  //   image(pgs[1], x, 0, lagura, height);
  //   // image(pgs[2], x, 0, lagura, height);
  // }

  // filter(BLUR, 1);
  // filter(POSTERIZE, 2);

  // D ----------------------------------------- /
  // background(0)
  // blendMode(SCREEN);

  // let cor = color(sensor_A, sensor_B, sensor_A + sensor_B / 2);

  // if(camadas[0]) {
  //   formas[5](pgs[0], 6, cor, 0, t);
  //   let qtd = 2;
  //   let lagura = width/qtd;
  //   let altura = height/qtd;
  //   for(let i = 0; i < qtd; i++) {
  //     for(let j = 0; j < qtd; j++) {
  //     let x = i * lagura;
  //     let y = j * altura;
  //     image(pgs[0], x, y, lagura, altura);
  //     }
  //   }
  // }

  // if(camadas[1]) {
  //   formas[2](pgs[1], 10, cor, 0, t);
  //   image(pgs[1], 0, 0, width, height);
  // }

  // if(camadas[2]) {
  //   formas[2](pgs[2], 10, cor, 0, t * 0.2);
  //   let qtd = 4;
  //   let lagura = width/qtd;
  //   let altura = height/qtd;
  //   let y_offset = (t * 2) % height;
  //   for(let i = 0; i < qtd; i++) {
  //     for(let j = 0; j < qtd; j++) {
  //     let x = i * lagura;
  //     let y = j * altura;
  //     image(pgs[2], x, y + y_offset, lagura, altura);
  //     image(pgs[2], x, y + y_offset - height, lagura, altura);
  //     }
  //   } 
  // }

  // filter(BLUR, 1);
  // filter(POSTERIZE, 2);


  // F ----------------------------------------- /
  
  // blendMode(SCREEN);

  // let qtd = 2;
  // let lagura = width/qtd;
  // let altura = height/qtd;

  // let sensor_A_n = sensor_A/255 + 0.6;
  // let sensor_B_n = sensor_B/255 + 0.6;

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
  // filter(BLUR, 1);
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