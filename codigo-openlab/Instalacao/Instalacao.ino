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

// CONFIGURACAO AMPLI
int A_RUIDO_LIMITE = 1000; // Nenhum som abaixo dessa amplitude sera considerado
int A_NOISE_LIMIAR = 150; // Valor de brilho para aparecer o noise
#define A_SAMPLES 100 // Número de amostras para cálculo da média

// CONFIGURACAO TEMP

// TIMER 1
unsigned long previousMillis_1 = 0;
const long interval_1 = 1000; // 60.000 ms = 1 minuto
int t_1 = 0;

// TIMER 2
unsigned long previousMillis_2 = 0;
const long interval_2 = 10000; // 60.000 ms = 1 minuto
int t_2 = 0;


// CONFIG GERAL
int t_g = 1000;

void setup() {
  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.clear();
  pinMode(MIC_PIN, INPUT);
  Serial.begin(115200);
}

void loop() {
  // efeito_fft();
  // efeito_amplitude_noise();
  efeito_amplitude_ponto();
  FastLED.show();
  delay(50);
  incrementa_tempo();
}
