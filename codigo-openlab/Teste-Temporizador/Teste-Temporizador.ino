#include <FastLED.h>

#define LED_PIN     4       // Pino onde a fita LED está conectada
#define NUM_LEDS    192      // Número de LEDs na fita
CRGB leds[NUM_LEDS];

// TIMER 1
unsigned long previousMillis_1 = 0;
const long interval_1 = 60000; // 60.000 ms = 1 minuto
int t_1 = 0;

// TIMER 2
unsigned long previousMillis_2 = 0;
const long interval_2 = 10000; // 60.000 ms = 1 minuto
int t_2 = 0;


void setup() {
  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.clear();
  Serial.begin(115200);
}

void loop() {

  leds[t_2 % 192] = CHSV( t_1 % 255, 255, 255);
  fadeToBlackBy(leds, NUM_LEDS, 1);
  FastLED.show();
  delay(10);

  // TIMER
  incrementa_tempo();

}

void incrementa_tempo() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis_1 >= interval_1) {
    previousMillis_1 = currentMillis;
    t_1++;
    Serial.print("t_1: ");
    Serial.println(t_1);
  }

  if (currentMillis - previousMillis_2 >= interval_2) {
    previousMillis_2 = currentMillis;
    t_2++;
    Serial.print("t_2: ");
    Serial.println(t_2);
  }
}