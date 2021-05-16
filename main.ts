function Get_B () {
    if (keyboard.keyPressed(KeyValue.keyany)) {
        d = keyboard.keyBasic()
        if (d < 10) {
            y = keyboard.keyMathNumber()
            keyboard.setIndexColor(d, 0xff0000)
            basic.pause(200)
            keyboard.setIndexColor(d, 0x000000)
        }
    }
}
keyboard.kbEvent(KeyValue.keyequal, function () {
    keyboard.setIndexColor(14, 0xff0000)
    if (z == "+") {
        j = x + y
        x = 0
        y = 0
        i = 1
    } else if (z == "-") {
        j = x - y
        x = 0
        y = 0
        i = 1
    } else if (z == "*") {
        j = x * y
        x = 0
        y = 0
        i = 1
    } else if (z == "/") {
        j = x / y
        x = 0
        y = 0
        i = 1
    }
    keyboard.setIndexColor(14, 0x000000)
    for (let index = 0; index < 4; index++) {
        basic.showNumber(j)
    }
})
function Get_A () {
    if (keyboard.keyPressed(KeyValue.keyany)) {
        d = keyboard.keyBasic()
        if (d < 10) {
            x = keyboard.keyMathNumber()
            keyboard.setIndexColor(d, 0xff0000)
            basic.pause(200)
            keyboard.setIndexColor(d, 0x000000)
        }
    }
}
function Fetch_Operator () {
    if (keyboard.keyPressed(KeyValue.keyany)) {
        d = keyboard.keyBasic()
        if (d > 9) {
            z = keyboard.keyMathFunction()
            keyboard.setIndexColor(d, 0xff0000)
            basic.pause(200)
            keyboard.setIndexColor(d, 0x000000)
            i += 1
        }
    }
}
let j = 0
let z = ""
let d = 0
let i = 0
let y = 0
let x = 0
keyboard.setBrightness(100)
x = 0
y = 0
i = 1
basic.forever(function () {
    while (i == 1) {
        basic.pause(100)
        Get_A()
        basic.showNumber(x)
        Fetch_Operator()
    }
    while (i == 2) {
        basic.pause(100)
        Get_B()
        basic.showNumber(y)
    }
})
