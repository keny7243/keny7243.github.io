const spinButton = document.querySelector('.spin-button')
const correctButton = document.querySelector('.correct-button')
const billingButton = document.querySelector('.billing-button').addEventListener('click', unlock);
const requiredBillInputs = document.querySelector('.billreq')
const billForm = document.querySelector('.bill-form')
const spinner = document.getElementById('circle')

spinButton.addEventListener('click', spin);
correctButton.addEventListener('click', correct);
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
    console.log(lostMoneyInt);
    lostMoneyInt = lostMoneyInt + 10;
    lostMoney.textContent = lostMoneyInt;

}

function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    spinner.style.transform = "rotate("+deg+"deg)";
  }
  

function correct() {
    console.log(gainedMoneyInt);
    gainedMoneyInt = gainedMoneyInt + 15;
    gainedMoney.textContent = gainedMoneyInt;
}


////////////////////////

