var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisp = document.querySelector("#msg");

colorDisplay.textContent = pickedColor;

for (var i = 0; squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(pickedColor === clickedColor) {     
            msg = "Correct!";
            messageDisp.textContent = "Correct!";
            // change remainding colors to pickedColor
            changeColors(clickedColor);
            // change headerColor to pickedColor

        }else {
            this.style.backgroundColor = "#232323";
            messageDisp.textContent = "Try Again";
        }
    });

}
function changeColors(color) {
    for(let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }   
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}