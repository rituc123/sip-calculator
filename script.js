let chart;

function calculateSIP(){

let P = document.getElementById("amount").value;
let annualRate = document.getElementById("rate").value;
let years = document.getElementById("years").value;

let r = annualRate / 12 / 100;
let n = years * 12;

let maturityAmount = P * (((Math.pow(1+r,n))-1)/r)*(1+r);

let investedAmount = P * n;
let estimatedReturns = maturityAmount - investedAmount;


document.getElementById("invested").innerHTML =
"₹ " + Math.round(investedAmount);


document.getElementById("returns").innerHTML =
"₹ " + Math.round(estimatedReturns);


document.getElementById("result").innerHTML =
"₹ " + Math.round(maturityAmount);


const ctx = document.getElementById('sipChart');

if(chart){
  chart.destroy();
}

chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Invested Amount', 'Returns'],
    datasets: [{
      data: [investedAmount, estimatedReturns]
    }]
  }
});

}


function calculateEMI(){

let loan = document.getElementById("loan").value;
let rate = document.getElementById("emiRate").value / 12 / 100;
let years = document.getElementById("emiYears").value * 12;

let emi = (loan * rate * Math.pow(1+rate, years)) /
(Math.pow(1+rate, years)-1);


document.getElementById("emiResult").innerHTML =
"₹ " + Math.round(emi);

}


function toggleDarkMode(){
  document.body.classList.toggle("dark-mode");
}


function showCalculator(type){

if(type === 'sip'){
  document.getElementById("sipBox").style.display = "block";
  document.getElementById("emiBox").style.display = "none";
}

else{
  document.getElementById("sipBox").style.display = "none";
  document.getElementById("emiBox").style.display = "block";
}

}
