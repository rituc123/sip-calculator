function calculateSIP(){

let P = document.getElementById("amount").value;

let annualRate = document.getElementById("rate").value;

let years = document.getElementById("years").value;

let r = annualRate / 12 / 100;

let n = years * 12;

let maturityAmount = P * (((Math.pow(1+r,n))-1)/r)*(1+r);

document.getElementById("result").innerHTML =
"₹ " + Math.round(maturityAmount);

}