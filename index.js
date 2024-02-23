const clicks = document.querySelectorAll(".drum");

clicks.forEach(function(clicked){
    clicked.addEventListener("click",clickBeat);
}  );

function clickBeat(){
    alert("You clicked a beat");
}
