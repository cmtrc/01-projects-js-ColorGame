var colors = generateRngColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisp = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;


easyBtn.addEventListener("click", function() {
    h1.style.backgroundColor = "steelblue";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRngColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    h1.style.backgroundColor = "steelblue";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRngColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})


resetButton.addEventListener("click", function() {    
    // gen all new colours
    colors = generateRngColors(numSquares);
    // pick a new rnd color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // change color of squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisp.textContent ="";
})


colorDisplay.textContent = pickedColor;

for (var i = 0; squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(pickedColor === clickedColor) {     
            msg = "Correct!";
            messageDisp.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else {
            this.style.backgroundColor = "steelblue";
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
