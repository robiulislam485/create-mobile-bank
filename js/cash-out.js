document.getElementById('cash-out').addEventListener('click', function(event){
event.preventDefault();
const cashOutAmount = document.getElementById('cash-out-input').value;
const cashOutPin = document.getElementById('cash-out-pin').value;
if(cashOutPin === '4321'){
    const currentAmount = document.getElementById('current-amount').innerText;
    const currentBalance = parseFloat(currentAmount);
    const presentBalance = currentBalance - cashOutAmount;
    document.getElementById('current-amount').innerText = presentBalance;
}else{
    alert('Failed try again!')
}
});
