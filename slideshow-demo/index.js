
/*var num1 = 2, num2 = 3;
document.write(num1+num2 + "</br>");

(function add(num1, num2){
    document.write(num1+num2 + "<br>");
})(parseInt(prompt()), parseInt(prompt()));


var ar = new Array();

for(var i=0;i<3;i++) ar[i] = new Array();

for(var i=0;i<3;i++){
    for(var j= 0;j<3;j++){
        ar[i][j] = parseInt(prompt());
    }
}
document.write(ar[0]);


var win = 0, lost = 0;

for(var i = 1;i<=5;i++){

    var guess = parseInt(prompt("Enter a number: "));

    // random function generates number from 0 to 1

    var random = Math.floor(Math.random()*5)+ 1;


    if(guess==random){
        console.log("Okay! It matched!");
        win++;
    }
    else{
        console.log("You lost! random number was: "+random+"<br>");
        lost++;
    }
}


function pic1(){
    var img = document.querySelector("#imgId");

    img.src = "Images/shattajit.jpg";

}
function pic2(){
    var img = document.querySelector("#imgId");

    img.src = "Images/rumman.jpg";

}
function msg(){
    demo();
}
function demo(){
    var chng = document.querySelector("#pid");
    chng.innerHTML ="i am shattajit";
}

var images = ["Images/rumman.jpg", "Images/shattajit.jpg"];
var ImgTag = document.querySelector("img");

var idx = 0;

function next(){

    idx++;

    idx %= (images.length);

    ImgTag.src = images[idx];
}
function prev(){
    idx--;

    if(idx<0) idx = images.length - 1;

    ImgTag.src = images[idx];
}

var paraId = document.querySelector("#paraId");

function addStyle(){
    paraId.classList.add("para-style");
}

function removeStyle(){
    paraId.classList.remove("para-style");
}

var paraId2 = document.querySelector("#paraId2");

paraId2.addEventListener("mouseover", function(){
    paraId2.classList.add("para-style");
});

paraId2.addEventListener("mouseout", function(){
    paraId2.classList.remove("para-style");
});

function welcomeMsg(){

    var h1 = document.createElement("h1");
    var text;

    var name = prompt("Enter your name: ");

    if(name==null || name == ''){
        text = "no name found";
    }
    else{
        text = "welcome " + name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
welcomeMsg();
*/

const slideShowElements = document.querySelectorAll(".slideshow-element");

console.log(slideShowElements);

let cnt = 0;

setInterval(() => {
    
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    cnt++;

    if(cnt>=slideShowElements.length){
        cnt = 0;

        slideShowElements[0].classList.add("current");
    }
    else{
        currentElement.nextElementSibling.classList.add("current");
    }

}, 2000);