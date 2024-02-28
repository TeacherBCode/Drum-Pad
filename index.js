const drumBeats = ["sounds/tom-1.mp3","sounds/tom-2.mp3",
                    "sounds/tom-3.mp3","sounds/tom-4.mp3",
                    "sounds/crash.mp3","sounds/kick-bass.mp3",
                    "sounds/snare.mp3"];
var sounds = [];
for (var i =0 ;i<drumBeats.length; i++){
    sounds[i] = new Audio(drumBeats[i]);
}

var clicks = document.querySelectorAll(".drum");

for (var i=0; i<clicks.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var txt = this.innerText;
        playSound(txt);
    });
}


document.addEventListener("keypress",function(event){
    playSound(event.key);
    addPressEffect(event.key);
})



function playSound(txt){

    switch(txt.toUpperCase()){
        case "W":
            sounds[0].play();
            break;
        case "A":
            sounds[1].play();
            break;
        case "S":
            sounds[2].play();
            break;
        case "D":
            sounds[3].play();
            break;
        case "J":
            sounds[4].play();
            break;
        case "K":
            sounds[5].play();
            break;
        case "L":
            sounds[6].play();
            break;
        default:
            console.log("txt");
    }
}


function addPressEffect(currentKey){
    var activeButton = document.querySelector("."+ currentKey + "key");
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},150);
}



