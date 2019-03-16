/*function isUserValid(bool){
    return bool};
    var answer = isUserValid(false) ? "you may enter !":"access denied !";

    var automatedAnswer =
        "your Account # is"+ (isUserValid(false) ? "1234":"Invalid Account");
        */

//Switch 

function moveCommand(directon) {
    var whatHappens;
    switch (directon) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you reached home";
            break;
        case "left":
            whatHappens = "you reached a river";
            break;
        case "right":
            whatHappens = "you reached a hill";
            break;
        case "default":
            whatHappens = "please enter a valid direction";
            break;
    }
    return whatHappens;
}