input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("" + input.temperature() + " Grad")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showCompass(5000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(randint(0, 9))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
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
