let num1 = "0"+0
let num2 = 0

document.getElementById("count-el").textContent = num1
document.getElementById("count-ell").textContent = num2

let countEl = document.getElementById("count-el")
let countEll = document.getElementById("count-ell")

let sum = 0
let num = 0

function plusOne(){
    sum += 1
    countEl.textContent = sum
}
function plusTwo(){
    sum += 2
    countEl.textContent = sum
}
function plusThree(){
    sum += 3
    countEl.textContent = sum
}

function rightplusOne(){
    num += 1
    countEll.textContent = num
}
function rightplusTwo(){
    num += 2
    countEll.textContent = num
}
function rightplusThree(){
    num += 3
    countEll.textContent = num
    
}

function reset(){
    countEl.textContent = "00"
    countEll.textContent = 0
    sum = 0
    num = 0
}