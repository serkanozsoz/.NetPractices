// function showRedColor(){
// var redColor = document.getElementById("range-red").value;
// console.log("Red: " + redColor);
// }
// function showGreenColor(){
//     var greenColor = document.getElementById("range-red").value;
//     console.log("Green: " + greenColor);
//     }
// function showBlueColor(){
//     var blueColor = document.getElementById("range-red").value;
//     console.log("Blue: " + blueColor);
// }

// function showColor(){
//     var redColor = document.getElementById("range-red").value;
//     console.log("Red: " + redColor);
//     var greenColor = document.getElementById("range-green").value;
//     console.log("Green: " + greenColor);
//     var blueColor = document.getElementById("range-blue").value;
//     console.log("Blue: " + blueColor);

//     var r = parseInt(redColor,10).toString(16);
//     var b = parseInt(blueColor,10).toString(16);
    
//     var g = parseInt(greenColor,10).toString(16);


//         // document.getElementById("bg-picker").innerHTML = 
//     document.getElementById("bg-picker").style.backgroundColor=("#"+r+g+b);
// }

console.log("3.js");

var changeColor = () => {
    var rangeRed = document.getElementById("range-red");
    var rangeGreen = document.getElementById("range-green");
    var rangeBlue = document.getElementById("range-blue");

    var pickerDiv = document.getElementById("picker-div");

    console.log([rangeRed.value, rangeGreen.value, rangeBlue.value]);
    //var color = "rgb(" + rangeRed.value + "," + rangeGreen.value + "," + rangeBlue.value + ")";
    var color = `rgb(${rangeRed.value},${rangeGreen.value},${rangeBlue.value})`;
    var colorRev = `rgb(${255 - rangeRed.value},${255 - rangeGreen.value},${255 - rangeBlue.value})`;
    pickerDiv.innerHTML = color;
    pickerDiv.style.backgroundColor = color;
    pickerDiv.style.color = colorRev;
    
}

var copyClipboard = () => {//arrow function
var pickerDiv = document.getElementById("picker-div");
navigator.clipboard.writeText(pickerDiv.innerHTML);
Swal.fire({
    icon: 'info',
    title: 'Kopyalandı',
    text: pickerDiv.innerHTML,
    footer: 'Web Mobil 8 Sınıfı'
})
}
changeColor();