const reason = document.querySelector('#input-reason');
const amount = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#cancelBtn');
const confirmButton = document.querySelector('#confirmBtn');
const listExpenses = document.querySelector('#expenses-list');

confirmButton.addEventListener('click', () => {
    const enteredReason = reason.value;
    const enteredAmount = amount.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        return;
    }
    else {
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason + ': $' + enteredAmount;
        listExpenses.appendChild(newItem);
    }


});

