function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, StandardSpeed)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, StandardSpeed)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, StandardSpeed)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, StandardSpeed)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, StandardSpeed)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, StandardSpeed)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, StandardSpeed)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, StandardSpeed)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, StandardSpeed)
}
let StandardSpeed = 0
StandardSpeed = 40
