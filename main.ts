input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showString(
    3,
    0,
    "Luk Puk",
    1
    )
    OLED12864_I2C.showString(
    5,
    1,
    "IS",
    2
    )
    OLED12864_I2C.showString(
    2,
    2,
    "CHRUUUNT!",
    10
    )
    isCancel = 0
    yPos = 24
    xMax = 60
    while (!(isCancel)) {
        if (isCancel) {
            break;
        }
        newX = xPos + xDir
        if (newX < 0) {
            xDir = 0 - xDir
            newX = 1
        } else if (newX > xMax) {
            xDir = 0 - xDir
            newX = xMax - 2
        }
        OLED12864_I2C.pixel(xPos, yPos, 0)
        OLED12864_I2C.pixel(newX, yPos, 1)
        OLED12864_I2C.pixel(xPos, yPos + 1, 0)
        OLED12864_I2C.pixel(newX, yPos + 1, 1)
        OLED12864_I2C.pixel(xPos, yPos + 2, 0)
        OLED12864_I2C.pixel(newX, yPos + 2, 1)
        OLED12864_I2C.pixel(xPos, 0, 0)
        OLED12864_I2C.pixel(newX, 0, 1)
        xPos = newX
        basic.pause(30)
    }
})
input.onButtonPressed(Button.B, function () {
    isCancel = 1
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    2,
    2,
    "Game over",
    55
    )
})
let xPos = 0
let newX = 0
let xMax = 0
let yPos = 0
let xDir = 0
let isCancel = 0
isCancel = 0
xDir = 1
OLED12864_I2C.init(60)
basic.forever(function () {
	
})
