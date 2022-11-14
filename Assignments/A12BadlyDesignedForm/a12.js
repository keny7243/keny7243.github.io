const spinButton = document.querySelector('.spin-button')
const correctButton = document.querySelector('.correct-button')
const billingButton = document.querySelector('.billing-button').addEventListener('click', unlock);
const requiredBillInputs = document.querySelector('.billreq')
const billForm = document.querySelector('.bill-form')
const spinnerContainer = document.getElementById('circle')
const spinner = document.getElementById('spinner')
const phoneNumber = document.querySelector('.output')

spinButton.addEventListener('click', spin);
correctButton.addEventListener('click', correct);
const lostMoney = document.querySelector('.lost-money');
const gainedMoney = document.querySelector('.gained-money');
let lostMoneyInt = parseInt(lostMoney.textContent);
let gainedMoneyInt = parseInt(gainedMoney.textContent);
let numberOfCorrectClicks = 0;

//console.log(outputInt);
console.log(gainedMoneyInt);
console.log(lostMoneyInt);

console.log(requiredBillInputs);
function unlock() {
 /*       for (var i = 0; i < billForm.elements.length; i++) {
            if(form.elements[i].value != form.elements[i].defaultValue) return(true);
        }
        return(false);
      }
    if (requiredBillInputs) {*/
    spinButton.removeAttribute('disabled');
    correctButton.removeAttribute('disabled');
}

console.log(lostMoneyInt);

function spin() {
    //make the circle spin
    //record the number that the circle lands on
    //add money owed to lostMoney
    rotateFunction();
    lostMoneyInt = lostMoneyInt + 1.5;
    lostMoney.textContent = lostMoneyInt;
}

let num = 0;
function rotateFunction(){
    resetSpinner;
    console.log(resetSpinner);
    /*https://workshops.hackclub.com/spinning_wheel/ random math equation, min and max values changed*/
    var min = 0;
    var max = -360;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    spinner.style.transform = "rotate("+deg+"deg)";
    var degForNumber = -deg;
    console.log(deg);
    console.log(degForNumber);
    /*https://stackoverflow.com/questions/6454198/check-if-a-value-is-within-a-range-of-numbers js needs range to have && inbetween*/
    /*Thanks Jack*/
    if ((342 <= degForNumber && degForNumber <=360) || (0 <= degForNumber && degForNumber <18)){
        num = 0;
    } else if (18 <= degForNumber && degForNumber <54) {
        num = 1;
    } else if (54 <= degForNumber && degForNumber <90){
        num = 2;
    } else if (90 <= degForNumber && degForNumber <126){
        num = 3;
    } else if (126 <= degForNumber && degForNumber <162){
        num = 4;
    } else if (162 <= degForNumber && degForNumber <198){
        num = 5;
    } else if (198 <= degForNumber && degForNumber <234){
        num = 6;
    } else if (234 <= degForNumber && degForNumber <270){
        num = 7;
    } else if (270 <= degForNumber && degForNumber <306){
        num = 8;
    } else if (306 <= degForNumber && degForNumber <342){
        num = 9;
    }
    console.log(num);
  }

function resetSpinner(){
  spinner.style.transform = "rotate("+-deg+"deg)";;
}

function correct() {
    console.log(num);
    phoneNumber.textContent = phoneNumber.textContent + num;
    gainedMoneyInt = gainedMoneyInt + 10;
    gainedMoney.textContent = gainedMoneyInt;
    console.log(gainedMoneyInt);
    numberOfCorrectClicks++;
    if (numberOfCorrectClicks > 9) {
        correctButton.setAttribute('disabled', '');
        spinButton.setAttribute('disabled', '');
    };
}

