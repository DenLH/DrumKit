

//detecting Button press
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    keyPress(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });
}

//Detecting keyboard press
document.addEventListener("keydown", function (event) {

    keyPress(event.key);

    buttonAnimation(event.key);
});


function keyPress(key) {


    switch (key) {
            case "w":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "a":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "s":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "d":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        
            default: console.log(buttonInnerHTML);
                break;
        }

}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    var toggleClass = activeButton.classList;
    toggleClass.add("pressed");
    setTimeout(function() {
        toggleClass.remove("pressed");
    }, 100);
}
