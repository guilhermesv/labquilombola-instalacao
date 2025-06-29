void efeito_amplitude_ponto() {
  int peakToPeak = getAmplitude(); // Calcula a amplitude do sinal

  int sensor = peakToPeak;
  if(sensor < A_RUIDO_LIMITE) {
    sensor = 5;      
  }
  int brilho_max = map(sensor, 0, 3000, 0, 255);
  int hue = 255-mod8(t_2 + 127, 255);
  int sat = map(sensor, 0, 3000, 255, 0);

  EVERY_N_MILLISECONDS(20) {
    fadeToBlackBy(leds, NUM_LEDS, 20);
  }
}
