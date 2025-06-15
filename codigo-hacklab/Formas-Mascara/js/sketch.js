let pgs;
let t;

let f; // contador da forma, variavel temporária



function setup() {

  // To aumentando o canvas no CSS para ganhar perfomance
  createCanvas(windowWidth/2, windowHeight/2);

  pgs = []
  for(let i = 0; i < 3; i++) {
    pgs[i] = createGraphics(width/8, height/8);
  }

  t = 0;

}

function draw() {
  blendMode(BLEND);
  background(0);

  

  // A ----------------------------------------- /
  // blendMode(SCREEN);
  // formas[6](pgs[0], 5, "#f00", 0, t);
  // formas[2](pgs[1], 10, "#0f0", 0, t);
  // formas[0](pgs[2], 10, "#00f", 0, t);
  // image(pgs[0], 0, 0, width, height);
  // image(pgs[1], 0, 0, width, height);
  // image(pgs[2], 0, 0, width, height);

  // filter(BLUR, 1);
  // filter(POSTERIZE, 2);

  // B ----------------------------------------- /
  // blendMode(DIFFERENCE);
  // formas[0](pgs[0], 10, sin(frameCount/50) * 255, 0, t);
  // formas[2](pgs[1], 10, sin(PI/2+frameCount/50) * 255, 0, t);
  // formas[3](pgs[2], 5, cos(frameCount/50) * 255, 0, t);
  // image(pgs[0], 0, 0, width, height);
  // image(pgs[1], 0, 0, width, height);
  // image(pgs[2], 0, 0, width, height);

  // filter(BLUR, 3);
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
  // blendMode(SCREEN);
  // formas[5](pgs[0], 6, "#f00", 0, t);
  // formas[2](pgs[1], 10, "#0f0", 0, t);
  // formas[2](pgs[2], 10, "#00f", 0, t * 0.2);
  
  // image(pgs[2], 0, 0, width, height);
  // let qtd = 4;
  // let lagura = width/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   let x = i * lagura;
  //   image(pgs[0], x, 0, lagura, height);
  //   image(pgs[1], x, 0, lagura, height);
  // }

  // filter(BLUR, 1);
  // filter(POSTERIZE, 2);

  // D ----------------------------------------- /
  // blendMode(SCREEN);
  // formas[5](pgs[0], 6, "#f00", 0, t);
  // formas[2](pgs[1], 10, "#0f0", 0, t);
  // formas[2](pgs[2], 10, "#00f", 0, t * 0.2);
  
  // image(pgs[2], 0, 0, width, height);

  // let qtd = 4;
  // let lagura = width/qtd;
  // let altura = height/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   for(let j = 0; j < qtd; j++) {
  //   let x = i * lagura;
  //   let y = j * altura;
  //   image(pgs[0], x, y, lagura, altura);
  //   image(pgs[1], x, y, lagura, altura);
  //   }
  // }

  // filter(BLUR, 1);
  // filter(POSTERIZE, 2);

  // E ----------------------------------------- /
  // blendMode(SCREEN);
  // formas[5](pgs[0], 6, "#f00", 0, t);
  // formas[2](pgs[1], 5, "#0f0", 0, t);
  // formas[2](pgs[2], 10, "#00f", 0, t * 0.2);
  
  // image(pgs[2], 0, 0, width, height);

  // let qtd = 4;
  // let lagura = width/qtd;
  // let altura = height/qtd;
  // for(let i = 0; i < qtd; i++) {
  //   for(let j = 0; j < qtd; j++) {
  //     let x = i * lagura;
  //     let y = j * altura;
  //     let valor = noise(x * 0.05, y * 0.05, t*0.1);
  //     if(valor < 0.5) {
  //       image(pgs[0], x, y, lagura, altura);
  //     }
  //     if(valor > 0.3) {
  //       image(pgs[1], x, y, lagura, altura);
  //     }
  //   }
  // }

  // filter(BLUR, 2);
  // filter(POSTERIZE, 2);

  // F ----------------------------------------- /
  // USAR ALPHA PARA LIGAR / DESLIGAR CAMADA

  blendMode(SCREEN);

  let qtd = 2;
  let lagura = width/qtd;
  let altura = height/qtd;
  for(let i = 0; i < qtd; i++) {
    for(let j = 0; j < qtd; j++) {
      let x = i * lagura;
      let y = j * altura;
  
      let valor = noise(x * 0.01, y * 0.01, t*0.1);
      formas[2](pgs[2], 10, color(0,0,300*valor, 255), 0, t * 0.2);
      image(pgs[2], x, y, lagura, altura);
     
    }
  }

  qtd = 4;
  lagura = width/qtd;
  altura = height/qtd;
  for(let i = 0; i < qtd; i++) {
    for(let j = 0; j < qtd; j++) {
      let x = i * lagura;
      let y = j * altura;
      
      let valor = noise(x * 0.05, y * 0.05, t*0.1);
      // formas[5](pgs[0], 5, color(300*valor,0,0), 0, t);
      formas[6](pgs[0], 4, color(300*valor,0,0), 0, t);
      image(pgs[0], x, y, lagura, altura);
      
      valor = noise(x * 0.01, y * 0.05, t*0.1);
      formas[2](pgs[1], 5, color(0,300*valor,0), 0, t);
      image(pgs[1], x, y, lagura, altura);
     
    }
  }

  blendMode(BLEND);
  // cortina(40, 10, 0.5);
  cortina(30, 20, 0.5);
  
  filter(BLUR, 1);
  filter(POSTERIZE, 2);
  
  

  t += 0.1;
}
