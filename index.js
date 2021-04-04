
function Person(name, age) {

    this.name = name;
    this.age = age;
    this.doSmth = function () {
        console.log("I do smth");
    }

}
var p1 = new Person("vlad", 22);
p1.doSmth();



var sound = "default";
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var letter = this.innerHTML;
        playSound(letter);
    });
}

function playSound(letter) {
    switch (letter) {
        case "w":
            sound = "tom-1";
            break;
        case "a":
            sound = "tom-2";
            break;
        case "s":
            sound = "tom-3";
            break;
        case "d":
            sound = "tom-4";
            break;
        case "j":
            sound = "crash";
            break;
        case "k":
            sound = "kick";
            break;


        default:
            sound = "kick-bass";

    }
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
    buttonAnimation(letter)

}

document.addEventListener("keydown", function (event) {

    console.log(event.key);
    playSound(event.key);
  

});



function buttonAnimation(currentKey)
{var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);

}