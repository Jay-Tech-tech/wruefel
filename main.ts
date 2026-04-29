input.onGesture(Gesture.Shake, function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showNumber(randint(1, 12))
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showNumber(randint(1, 16))
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showNumber(randint(1, 20))
    } else if (input.pinIsPressed(TouchPin.P3)) {
        basic.showNumber(randint(1, 24))
    } else {
        basic.showNumber(randint(1, 6))
    }
})
