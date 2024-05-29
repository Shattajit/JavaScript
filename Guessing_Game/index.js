// finding elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const WinLostMsg = document.createElement("p");

let rem = 0, won = 0, lost = 0, now = 0;

form.addEventListener("submit", function(event){

    event.preventDefault();
    
    now++;

    if(now > 5){

        guessingNumber.disabled = true;
        checkButton.disabled = true;

        now = 0;
    }
    else{
        checkResult(guessingNumber.value);

        remainingAttempts.innerHTML = `Attempts remaining: ${5-now}`;
    }

    Msg(won, lost);

    guessingNumber.value = "";

    if(now == 5){

        guessingNumber.disabled = true;
        checkButton.disabled = true;

        now = 0;
    }
});

function Msg(wons, losts){

    WinLostMsg.innerHTML = `Win: ${wons}, Lost: ${losts}`;
    WinLostMsg.classList.add("large-text");
    cardBody.appendChild(WinLostMsg);

}
function checkResult(value){

    const randomNum = getRandomNumber(5);
    console.log(value);

    if(randomNum == value){
        won++;
        resultText.innerHTML = `You have won!`;
    }
    else{
        lost++;
        resultText.innerHTML = `You have lost! Random number was: ${randomNum}`;
    }
}

function getRandomNumber(limit){

    return Math.floor(Math.random() * limit)+1;
}