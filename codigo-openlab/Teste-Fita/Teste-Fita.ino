#include <FastLED.h>

// DEFINICOES
#define ledPin 4  // Porta Digital
#define NUM_LEDS 192      // Numero de leds
CRGB leds[NUM_LEDS];     // Cria array de leds

void setup() {
  FastLED.addLeds<WS2812, ledPin, GRB>(leds, NUM_LEDS);
  apaga();
  Serial.begin(9600);
}

void loop() {

  for (int dot = 0; dot < NUM_LEDS; dot++) {
    leds[dot] = CRGB::Blue;
    FastLED.show();
    // clear this led for the next time around the loop
    leds[dot] = CRGB::Black;
    delay(30);
  }
}


void apaga() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB(0, 0, 0);
  }
  FastLED.show();
}
