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

void incrementa_tempo() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis_1 >= interval_1) {
    previousMillis_1 = currentMillis;
    t_1++;
    // Serial.print("t_1: ");
    // Serial.println(t_1);
  }

  if (currentMillis - previousMillis_2 >= interval_2) {
    previousMillis_2 = currentMillis;
    t_2++;
    // Serial.print("t_2: ");
    // Serial.println(t_2);
  }

  t_g++;
}