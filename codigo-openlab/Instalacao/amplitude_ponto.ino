// Fazer aqui o leds serem acesos em locais aleatórios, porém quanto maais alto o som mais ledss

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

  
  for (int i = 0; i < NUM_LEDS; i++) {
    uint8_t noise = inoise8(i * scale + x + t);
    if ( noise > A_NOISE_LIMIAR) {
      // leds[i] = CHSV(hue, 255, brilho_max);
      // leds[i] = CHSV(hue, 255, avg8(noise, brilho_max));
      leds[i] = CHSV(hue, sat, avg8(noise, brilho_max));
      // leds[i] = CHSV(hue, 255, qsub8(brilho_max, noise));
    }
  }

}
