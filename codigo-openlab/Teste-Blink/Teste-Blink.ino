// Defina o pino do LED embutido
const int ledPin = 2;

void setup() {
  // Configure o pino como saída
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH); // Liga o LED
  delay(1000);                // Aguarda 1 segundo
  digitalWrite(ledPin, LOW);  // Desliga o LED
  delay(1000);                // Aguarda 1 segundo
}