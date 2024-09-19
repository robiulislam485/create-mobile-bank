document.getElementById('add-money-btn').addEventListener('click', function(event){
   event.preventDefault();
  const addMoneyInput = document.getElementById('add-money-input').value;
  const pinInput = document.getElementById('pin-number').value;
  if(pinInput === '1234'){
    const currentAmount = document.getElementById('current-amount').innerText;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(currentAmount);
    const newBalance = addMoneyNumber + balanceNumber;
    document.getElementById('current-amount').innerText = newBalance;
  }
  else{
    alert('wrong pin')
  }
 
})