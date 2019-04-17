function squareNumber(){
var sqNumber = document.getElementById('square-input').value;
console.log("The result of squaring the number " + sqNumber + " is " + (sqNumber*sqNumber))
document.getElementById('squareResult').innerText = (sqNumber*sqNumber)
}

function halfNumber(){
var hNumber = document.getElementById('half-input').value
console.log("Half of " + hNumber + " is " + (hNumber/2))
document.getElementById('halfResult').innerText = (hNumber/2)
}

function percentOf(){
var percentOne = document.getElementById('percent1-input').value
var percentTwo = document.getElementById('percent2-input').value
console.log(percentOne + " is " + ((percentOne/percentTwo)*100) + "% of " + percentTwo)
document.getElementById('percentResult').innerText = ((percentOne/percentTwo)*100) + "%"
}

function areaOfCircle(){
var radiusNumber = document.getElementById('area-input').value
console.log("The area for a circle with radius " + radiusNumber + " is " + ((radiusNumber*radiusNumber)*Math.PI))
document.getElementById('solution').innerText = (radiusNumber*radiusNumber)*Math.PI
}









