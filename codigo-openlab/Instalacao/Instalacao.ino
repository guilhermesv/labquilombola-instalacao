#include <arduinoFFT.h>
#include <FastLED.h>

// CONFIGURACAO ESP E FITA
#define LED_PIN     4       // Pino onde a fita LED está conectada
#define NUM_LEDS    192      // Número de LEDs na fita
#define MIC_PIN     34      // Pino do microfone
CRGB leds[NUM_LEDS];

// CONFIGURACAO FREQ
#define F_SAMPLES     512     // Número de amostras da FFT (deve ser uma potência de 2)
#define F_SAMPLING_FREQUENCY 40000 // Frequência de amostragem em Hz
double vReal[F_SAMPLES];
double vImag[F_SAMPLES];
ArduinoFFT<double> FFT = ArduinoFFT<double>(vReal, vImag, F_SAMPLES, F_SAMPLING_FREQUENCY);

// CONFIG GERAL
int t = 1000;

void setup() {
  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.clear();
  pinMode(MIC_PIN, INPUT);
  Serial.begin(115200);
}

void loop() {
  efeito_fft();
  delay(50);
}
