#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WebServer.h>
#include <EEPROM.h>
#include <Wire.h>
 

void setup(){
  Serial.begin(115200);
  setupWirelessConnection();
}
void loop() {
  if ((WiFi.status() == WL_CONNECTED)){
    for (int i = 0; i < 10; i++){
      digitalWrite(LED_BUILTIN, HIGH);
      delay(1000);
      digitalWrite(LED_BUILTIN, LOW);
      delay(1000);
    }
  }
}
