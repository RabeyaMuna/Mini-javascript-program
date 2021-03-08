const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountone = document.getElementById('amount-one');
const amountwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
    const cuurone = currencyOne.value;
    const currtwo = currencyTwo.value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${cuurone}`)
    .then(res=>res.json())
    .then(data=>{
        const rateE = data.rates[currencyTwo.value];
        rate.innerText = `1 ${cuurone}=${rateE} ${currtwo}`;
        // amountwo.value = (amountone.value * rateE).toFixed(2);
    })
}
currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change', calculate);
amountone.addEventListener('input', calculate);
amountwo.addEventListener('input', calculate);
swap.addEventListener('click',()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value=temp;
    calculate();
}
)
calculate()