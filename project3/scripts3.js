const exchangeRates = {
    "USD": {
        "EUR": 0.85,
        "INR": 79,
        "USD": 1
    },
    "EUR": {
        "USD": 1.18,
        "INR": 88,
        "EUR": 1
    },
    "INR": {
        "USD": 0.013,
        "EUR": 0.011,
        "INR": 1.32
    }
};

document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
