#ifndef HARDWARE_CONFIG_H
#define HARDWARE_CONFIG_H
#include "hardware_variants.h"

/* HARDWARE DEFINITION*/
/* key matrix size */
#define MATRIX_ROWS 5
#define MATRIX_COLS 6

#define MATRIX_ROW_PINS {11, 13, 14, 12, 2 }
#define MATRIX_COL_PINS {26, 27, 28, 29, 30, 15 }
#define UNUSED_PINS {}
#define BACKLIGHT_LED_PIN 16 

#define BACKLIGHT_PWM_ON 1   
/* COL2ROW or ROW2COL */
#define DIODE_DIRECTION COL2ROW
          #define BATTERY_TYPE BATT_LIPO
        #define VBAT_PIN  31
        #define  STATUS_BLE_LED_PIN  19  //blue = 0.19
#define  STATUS_KB_LED_PIN 17  //red = 0.17
  /*      #define D3      18  // NOTE on board serial
        #define D2      7   // NOTE on board serial
        #define D1      25  //sda
        #define D0      26  //scl
        #define D4      27
        #define C6      28
        #define D7      29
        #define E6      30
        #define B4      15
        #define B5      16
        #define F4      5
        #define F5      4
        #define F6      3
        #define F7      2
        #define B1      12  //sck
        #define B3      14  //miso
        #define B2      13  //mosi
        #define B6      11
        #define NC      24 */  
#endif /* HARDWARE_CONFIG_H */
