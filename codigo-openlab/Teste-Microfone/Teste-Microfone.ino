#define MIC_PIN     34      // Pino do microfone
#define SAMPLES     256     // Número de amostras para analisar

void setup() {
  Serial.begin(115200);
}

void loop() {
  // Ajuste gráfico
  int rangelimit = 4500;
  Serial.print(0);
  Serial.print(" ");
  Serial.print(rangelimit);
  Serial.print(" ");

  int peakToPeak = getAmplitude(); // Calcula a amplitude do sinal
  Serial.println(peakToPeak);
  // Serial.print("Amplitude: ");
  // Serial.println(peakToPeak);
  delay(10); // Ajuste o intervalo de leitura conforme necessário

}

// Função para calcular a amplitude (volume)
int getAmplitude() {
  int signalMax = 0;  // Valor máximo detectado
  int signalMin = 4095; // Valor mínimo detectado (resolução de 12 bits)

  for (int i = 0; i < SAMPLES; i++) { // Coleta exatamente SAMPLES amostras
    int sample = analogRead(MIC_PIN);
    if (sample > signalMax) {
      signalMax = sample; // Atualiza o valor máximo
    }
    if (sample < signalMin) {
      signalMin = sample; // Atualiza o valor mínimo
    }
  }
  return signalMax - signalMin; // Amplitude do sinal
}





