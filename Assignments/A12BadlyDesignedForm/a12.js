const spinButton = document.querySelector('.spin-button')
const correctButton = document.querySelector('.correct-button')
const billingButton = document.querySelector('.billing-button').addEventListener('click', unlock);
const requiredBillInputs = document.querySelector('.billreq')
const billForm = document.querySelector('.bill-form')
const spinnerContainer = document.getElementById('circle')
const spinner = document.getElementById('spinner')
const phoneNumber = document.querySelector('.output')

spinButton.addEventListener('click', spin);
correctButton.addEventListener('click', correct)
const lostMoney = document.querySelector('.lost-money');
const gainedMoney = document.querySelector('.gained-money');
let lostMoneyInt = parseInt(lostMoney.textContent);
let gainedMoneyInt = parseInt(gainedMoney.textContent);

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
    lostMoneyInt = lostMoneyInt + 10;
    lostMoney.textContent = lostMoneyInt;

}


let number;
function rotateFunction(){
    
    resetSpinner;
    console.log(resetSpinner);
    var min = 0;
    var max = -360;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    spinner.style.transform = "rotate("+deg+"deg)";
    var degForNumber = -deg;
    console.log(deg);
    console.log(degForNumber);
   
    if ((342 <= degForNumber <=360) || (0 <= degForNumber <18)){
        return number = 0;
    } else if (18 <= degForNumber <54) {
        return number = 1;
    } else if (54 <= degForNumber <90){
        return number = 2;
    } else if (90 <= degForNumber <126){
        return number = 3;
    } else if (126 <= degForNumber <162){
        return number = 4;
    } else if (162 <= degForNumber <198){
        return number = 5;
    } else if (198 <= degForNumber <234){
        return number = 6;
    } else if (234 <= degForNumber <270){
        return number = 7;
    } else if (270 <= degForNumber <306){
        return number = 8;
    } else if (306 <= degForNumber <342){
        return number = 9;
    }
    console.log(number);
  }

function resetSpinner(){
  spinner.style.transform = "rotate("+-deg+"deg)";;
}


function correct() {
    console.log(number);
    gainedMoneyInt = gainedMoneyInt + 15;
    gainedMoney.textContent = gainedMoneyInt;
    console.log(gainedMoneyInt);
}


////////////////////////

