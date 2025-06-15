// Ir acrescentando as cores conforme intesidade, usar HSB

#include <FastLED.h>

#define NUM_LEDS 300
#define LED_PIN 7

CRGB leds[NUM_LEDS];

// int r_max = 100;
// int g_max = 100;
// int b_max = 100;

int brilho_max = 0;
int hue = 0;

int limiar = 120;


void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(100);
  
  Serial.begin(9600);


}


void loop() {

  if (Serial.available() > 0) {
    int micIntensity = Serial.read();
    brilho_max = map(micIntensity, 0, 50, 20, 300);
    hue = map(micIntensity, 0, 30, 140, 160);
  }

  EVERY_N_MILLISECONDS(20) {
    fadeToBlackBy(leds, NUM_LEDS, 20); 
  } 

  uint16_t x = 0;
  int scale = 30;
  uint16_t t = millis() / 4;

  // R
  for (int i = 0; i < NUM_LEDS; i++) {
    uint8_t r_noise = inoise8(i * scale + x + t);
    if (r_noise > limiar) {
      // leds[i].r = brilho_max;
      // leds[i].g = brilho_max;
      // leds[i].b = brilho_max;
      leds[i] = CHSV( hue, 255, brilho_max);
    } else {
      // leds[i].r = 0;
    }
  }

  // // // G
  // x = 100;
  // for (int i = 0; i < NUM_LEDS; i++) {
  //   uint8_t r_noise = inoise8(i * scale + x + t, 5);
  //   if (r_noise > limiar) {
  //     leds[i].g = brilho_max;
  //   } else {
  //     // leds[i].g = 0;
  //   }
  // }

  // // // // B
  // x = 200;
  // for (int i = 0; i < NUM_LEDS; i++) {
  //   uint8_t r_noise = inoise8(i * scale + x + t, 10);
  //   if (r_noise > limiar) {
  //     leds[i].b = brilho_max;
  //   } else {
  //     // leds[i].b = 0;
  //   }
  // }

  FastLED.show();
}