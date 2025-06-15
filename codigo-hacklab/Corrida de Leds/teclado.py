import serial
import keyboard

# Codigo para monitorar interações no teclado e enviar um comando para o Arduino

# Configurar a porta serial para se comunicar com o Arduino
arduino = serial.Serial('/dev/ttyACM0', 9600)  # Substitua 'COM3' pela sua porta (no Linux pode ser algo como '/dev/ttyUSB0')

def enviar_comando(comando):
    arduino.write(comando.encode())  # Envia o comando como byte para o Arduino

try:
    while True:
        # Captura a tecla pressionada e envia o comando para o Arduino
        if keyboard.is_pressed('a'):
            enviar_comando('a')
        if keyboard.is_pressed('s'):
            enviar_comando('s')
        if keyboard.is_pressed('d'):
            enviar_comando('d')
        if keyboard.is_pressed('f'):
            enviar_comando('f')
        if keyboard.is_pressed('g'):
            enviar_comando('g')
        if keyboard.is_pressed('q'):
            enviar_comando('q')
        
except KeyboardInterrupt:
    print("Programa encerrado.")

