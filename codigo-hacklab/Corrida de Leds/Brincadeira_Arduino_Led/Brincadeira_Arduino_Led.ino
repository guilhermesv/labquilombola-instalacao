#include <FastLED.h>

// CORRIDA DE LEDS COM FOLHAS USANDO MAKEY MAKEY.
// 
// 1. Conectar folhas as entradas "A", "S", "D" e "F" do Makey Makey
// 2. Conectar a fita de led ao seu microcontrolador e ajustar as variáveis
//    de definição da fita
// 3. Rodar o código auxiliar teclado.py para enviar os comandos para o arduino
// 4. O código está rodando, apertar Q quando precisar resetar o jogo pro começo.


// DEFINICOES FITA
#define ledPin 4 // Porta Digital
#define n 192 // Numero de leds
CRGB leds[n]; // Cria array de leds

// DEFINICOES JOGO
char comando;
char players[] = {'a', 's', 'd', 'f'}; // Quatro jogadores: 'a', 's', 'd', 'f'
int players_pos[] = {0, 0, 0, 0}; // Posicao inicial dos quatro jogadores
CRGB player_cor[] = {CRGB::Red, CRGB::Blue, CRGB::Green, CRGB(255, 100, 0)}; // Cores dos jogadores
#define players_qtd 4
#define step_size 2 // Cada jogador avança 2 LEDs por vez
boolean jogando = true;
boolean reset_necessario = false;

void setup() {
  // Inicializa LED
  FastLED.addLeds<WS2812, ledPin, GRB>(leds, n);
  FastLED.setBrightness(50);
  apaga();

  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    processar_comandos(); // Processa todos os comandos disponíveis no buffer
  }
  
  if (jogando) {
    // Atualiza a fita de LEDs após processar todos os comandos
    FastLED.show();
  }
  
  if (reset_necessario) {
    delay(1000); // Delay para exibir a vitória antes do reset
    reseta_jogo();  // Reseta o jogo automaticamente após a vitória
  }

  delay(50); // Delay para evitar sobrecarga do loop
}

void processar_comandos() {
  while (Serial.available() > 0) {
    comando = Serial.read();   
    
    if (comando == 'q') {
      reseta_jogo();  // Comando para resetar o jogo
      return; // Sai da função após resetar
    }
    
    if (jogando) {
      for (int i = 0; i < players_qtd; i++) {
        if (comando == players[i]) {
          atualiza_player(i);
        }
      }
    }
  }
}

void atualiza_player(int player) {
  if (players_pos[player] < n - step_size) { // Certifique-se de que há espaço para mover 2 LEDs
    // Apaga os 2 LEDs anteriores
    for (int i = players_pos[player]; i < players_pos[player] + step_size; i++) {
      leds[i] = CRGB::Black;
    }

    // Avança o jogador em 2 LEDs
    players_pos[player] += step_size;
    
    // Acende os próximos 2 LEDs
    for (int i = players_pos[player]; i < players_pos[player] + step_size; i++) {
      leds[i] = player_cor[player];
    }
  } else {
    // Jogador chegou ao final, pisca a cor do jogador e marca para resetar o jogo
    pisca_leds(player, 6);
    jogando = false;  // Pausa o jogo
    reset_necessario = true;  // Marca que o jogo deve ser resetado
  }
}

void pisca_leds(int player, int vezes) {
  for (int i = 0; i < vezes; i++) {
    // Pisca com a cor do jogador
    fill_solid(leds, n, player_cor[player]);
    FastLED.show();
    delay(200);
    
    apaga();
    delay(200);
  }
}

void apaga() {
  fill_solid(leds, n, CRGB::Black);
  FastLED.show();
}

void reseta_jogo() {
  for (int i = 0; i < players_qtd; i++) {  // Reseta as posições dos quatro jogadores
    players_pos[i] = 0;
  }
  jogando = true;  // Reativa o jogo
  apaga();  // Apaga todos os LEDs
  reset_necessario = false; // Limpa a flag de reset
}
