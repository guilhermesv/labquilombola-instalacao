// Ajustar a escala para todas as esteiras, 
// talvez seja legal uma escala de ruido grande
// Testei a amplitude controlando a saturacao, verificar

void efeito_amplitude() {
  int peakToPeak = getAmplitude(); // Calcula a amplitude do sinal

  int sensor = peakToPeak;
  if(sensor < A_RUIDO_LIMITE) {
    sensor = 5;      
  }
  int brilho_max = map(sensor, 0, 3000, 0, 255);
  int hue = 255-mod8(t_2 + 127, 255);
  int sat = map(sensor, 0, 3000, 0, 255);

  EVERY_N_MILLISECONDS(20) {
    fadeToBlackBy(leds, NUM_LEDS, 20);
  }

  uint16_t x = 0;
  // int scale = 30;
  // uint16_t t = millis() / 4;

  // int scale = 10;
  // uint16_t t = millis() / 10;

  int scale = 4;
  uint16_t t = millis() / 10;

  for (int i = 0; i < NUM_LEDS; i++) {
    uint8_t noise = inoise8(i * scale + x + t);
    if ( noise > A_NOISE_LIMIAR) {
      // leds[i] = CHSV(hue, 255, brilho_max);
      // leds[i] = CHSV(hue, 255, avg8(noise, brilho_max));
      leds[i] = CHSV(hue, sat, avg8(noise, brilho_max));
      // leds[i] = CHSV(hue, 255, qsub8(brilho_max, noise));
    }
  }

  FastLED.show();
}

int getAmplitude() {
  int signalMax = 0;
  int signalMin = 4095;

  for (int i = 0; i < A_SAMPLES; i++) {
    int sample = analogRead(MIC_PIN);
    if (sample > signalMax) {
      signalMax = sample; 
    }
    if (sample < signalMin) {
      signalMin = sample;
    }
  }
  return signalMax - signalMin;
}
