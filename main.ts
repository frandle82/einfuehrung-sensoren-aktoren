input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.temperature() + " Grad")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showCompass(5000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, 9))
})
basic.showString("HALLO!")
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
for (let index = 0; index < 4; index++) {
    basic.setLedColor(0xff0000)
    basic.pause(100)
    basic.setLedColor(0x00ff00)
    basic.pause(100)
    basic.setLedColor(0x007fff)
    basic.pause(100)
}
basic.turnRgbLedOff()
basic.showString("?")
