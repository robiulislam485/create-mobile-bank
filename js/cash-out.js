document.getElementById('cash-out-btn').addEventListener('click', function(event){
event.preventDefault();
const cashOutAmount = document.getElementById('cash-out-input').value;
const cashOutPin = document.getElementById('cash-out-pin').value;
console.log(cashOutAmount, cashOutPin);
if(cashOutPin === '1234'){
    const currentAmount = document.getElementById('current-amount').innerText;
    const cashOutNumber = parseFloat(cashOutAmount);
    const currentNumber = parseFloat(currentAmount);
    const presentBalance = currentNumber - cashOutNumber;
    document.getElementById('current-amount').innerText = presentBalance;
}
})