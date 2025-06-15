let formas = [

  // 0
  function listra_h(c, qtd, cor_A, cor_B, t) {
    let listra_qtd = qtd;
    let listra_passo = c.height/listra_qtd;
    let listra_altura = listra_passo * 0.3;
    let listra_y_offset = t % listra_passo;
    c.background(cor_A);
    for(let i = -1; i < listra_qtd; i++) {
      let y = i * listra_passo + listra_y_offset;
      c.fill(cor_B);
      c.rect(0, y, c.width, listra_altura);
    }
  },
  
  // 1
  function listra_v(c, qtd, cor_A, cor_B, t) {
    let listra_qtd = qtd;
    let listra_passo = c.width/listra_qtd;
    let listra_largura = listra_passo/2;
    let listra_x_offset = t % listra_passo;
    c.background(cor_A);
    for(let i = -1; i < listra_qtd; i++) {
      let x = i * listra_passo + listra_x_offset;
      c.fill(cor_B);
      c.rect(x, 0, listra_largura, c.height);
    }
  },
  
  // 2
  function circulo(c, qtd, cor_A, cor_B, t) {
    c.background(cor_A);
    let circulo_qtd = qtd;
    let circulo_passo = c.width/circulo_qtd;
    let circulo_espessura = circulo_passo/3;
    let circulo_offset = t % circulo_passo; 
    for (let i = 0; i < circulo_qtd * 1.5; i++) {
      let diametro = i * circulo_passo + circulo_offset;
      c.noFill();
      c.stroke(cor_B);
      c.strokeWeight(circulo_espessura);
      c.circle(c.width/2, c.height/2, diametro);
    }
  },
  
  // 3
  function triangulo_h(c, qtd, cor_A, cor_B, t) {
    let triangulo_qtd = qtd;
    let triangulo_passo = c.width/triangulo_qtd;
    let triangulo_largura = triangulo_passo;
    let triangulo_x_offset = t % triangulo_passo;
    c.background(cor_A);
    for(let i = -1; i < triangulo_qtd; i++) {
      let x = i * triangulo_passo + triangulo_x_offset;
      c.fill(cor_B);
      c.beginShape();
      c.vertex(x, 0);
      c.vertex(x, c.height);
      c.vertex(x + triangulo_largura, c.height);
      c.endShape();
    }
  },

  // 4
  function triangulo_v(c, qtd, cor_A, cor_B, t) {
    let triangulo_qtd = qtd;
    let triangulo_passo = c.height/triangulo_qtd;
    let triangulo_altura = triangulo_passo;
    let triangulo_y_offset = t % triangulo_passo;
    c.background(cor_A);
    for(let i = -1; i < triangulo_qtd + 1; i++) {
      let y = i * triangulo_passo + triangulo_y_offset;
      c.fill(cor_B);
      c.beginShape();
      c.vertex(0, y);
      c.vertex(c.width, y);
      c.vertex(c.width, y + triangulo_altura);
      c.endShape();
    }
  },

  // 5
  function elipses_h(c, qtd, cor_A, cor_B, t) {
    let listra_qtd = qtd;
    let listra_passo = c.height/listra_qtd;
    let listra_altura = listra_passo;
    let listra_y_offset = t % listra_passo;
    c.background(cor_A);
    c.ellipseMode(CORNER);
    for(let i = -1; i < listra_qtd; i++) {
      let y = i * listra_passo + listra_y_offset;
      c.fill(cor_B);
      c.ellipse(0, y, c.width, listra_altura);
    }
  },

  // 6
  function elipses_v(c, qtd, cor_A, cor_B, t) {
    let listra_qtd = qtd;
    let listra_passo = c.width/listra_qtd;
    let listra_largura = listra_passo;
    let listra_x_offset = t % listra_passo;
    c.background(cor_A);
    c.ellipseMode(CORNER);
    for(let i = -1; i < listra_qtd; i++) {
      let x = i * listra_passo + listra_x_offset;
      c.fill(cor_B);
      c.ellipse(x, 0, listra_largura, c.height);
    }
  },

]

function cortina(qtd, frequencia, vel){

  let largura = width/qtd;
  let altura = height;
  for(let i = 0; i < qtd; i++) {
    let x = i * largura + largura/2;
    let y = height/2
    noStroke();
    let largura_ajustada = map(sin(PI/frequencia*i + t*vel), -1, 1, 0, largura);
    fill(0);
    rectMode(CENTER);
    rect(x, y, largura_ajustada, altura);
  }
}

function cortina_loc(_y, c_altura, qtd, frequencia, vel){

  let largura = width/qtd;
  let altura = c_altura;
  for(let i = 0; i < qtd; i++) {
    let x = i * largura + largura/2;
    let y = height/2 + _y;
    noStroke();
    let largura_ajustada = map(sin(PI/frequencia*i + t*vel), -1, 1, 0, largura);
    fill(0);
    rectMode(CENTER);
    rect(x, y, largura_ajustada, altura);
  }
}