import processing.serial.*;
import ddf.minim.*;

Minim minim;
AudioInput in;
Serial myPort;

void setup() {
  size(512, 200);
  
  // Inicializa o Minim para capturar o áudio
  minim = new Minim(this);
  in = minim.getLineIn();
  
  // Configura a porta serial (substitua "COM3" ou use Serial.list() para conferir a porta correta)
  myPort = new Serial(this, "COM7", 9600);
 
}

void draw() {
  background(0);
  
  // Desenha uma linha representando o volume do áudio
  float amplitude = in.left.level() * height;
  stroke(255);
  line(0, height/2, width, height/2 - amplitude);
  
  // Mapeia a amplitude para o intervalo de 0 a 255
  int micIntensity = int(map(in.left.level(), 0, 1, 0, 255));
  
  // Envia o valor da amplitude para o Arduino
  myPort.write(micIntensity);  // Envia o valor para o Arduino
    
  // Mostra o valor da intensidade no console do Processing
  println("Intensidade do microfone: " + micIntensity);
}
