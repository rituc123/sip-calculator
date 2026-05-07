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

document.getElementById("sipBox").style.display = "none";

document.getElementById("emiBox").style.display = "none";

document.getElementById("fdBox").style.display = "none";

document.getElementById("lumpsumBox").style.display = "none";

document.getElementById("retirementBox").style.display = "none";


if(type === 'sip'){
document.getElementById("sipBox").style.display = "block";
}

else if(type === 'emi'){
document.getElementById("emiBox").style.display = "block";
}

else if(type === 'fd'){
document.getElementById("fdBox").style.display = "block";
}

else if(type === 'lumpsum'){
document.getElementById("lumpsumBox").style.display = "block";
}

else{
document.getElementById("retirementBox").style.display = "block";
}

}
function calculateFD(){

let P = document.getElementById("fdAmount").value;

let r = document.getElementById("fdRate").value / 100;

let t = document.getElementById("fdYears").value;

let A = P * Math.pow((1 + r), t);

document.getElementById("fdResult").innerHTML =
"₹ " + Math.round(A);

}



function calculateLumpsum(){

let P = document.getElementById("lumpAmount").value;

let r = document.getElementById("lumpRate").value / 100;

let t = document.getElementById("lumpYears").value;

let A = P * Math.pow((1 + r), t);

document.getElementById("lumpResult").innerHTML =
"₹ " + Math.round(A);

}



function calculateRetirement(){

let P = document.getElementById("retireMonthly").value;

let annualRate =
document.getElementById("retireRate").value;

let years =
document.getElementById("retireYears").value;

let r = annualRate / 12 / 100;

let n = years * 12;

let corpus =
P * (((Math.pow(1+r,n))-1)/r)*(1+r);

document.getElementById("retireResult").innerHTML =
"₹ " + Math.round(corpus);

}
