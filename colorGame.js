var colors = generateRngColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisp = document.querySelector("#msg");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(pickedColor === clickedColor) {     
            msg = "Correct!";
            messageDisp.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
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

function generateRngColors(num) {
    var arr = [];
    for(var  i = 0; i < num; i++) {
        arr[i] = rngColor();
    }
    return arr;
}

function rngColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}