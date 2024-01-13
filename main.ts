let אבן_נייר_ומספריים = 0
for (let index = 0; index < 6; index++) {
    אבן_נייר_ומספריים = randint(1, 3)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    if (אבן_נייר_ומספריים == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (אבן_נייר_ומספריים == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (אבן_נייר_ומספריים == 3) {
        basic.showIcon(IconNames.Scissors)
    }
}
