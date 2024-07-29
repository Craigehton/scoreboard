let num1 = 0
let num2 = 0

document.getElementById("sumHp").innerText = num1
document.getElementById("sumGp").innerText = num2

function hb1() {
    num1 += 1
    sumHp.innerText = num1
}

function hb2() {
    num1 += 2
    sumHp.innerText = num1
}

function hb3() {
    num1 += 3
    sumHp.innerText = num1
}

function gpb1() {
    num2 += 1
    sumGp.innerText = num2
}

function gpb2() {
    num2 += 2
    sumGp.innerText = num2
}

function gpb3() {
    num2 += 3
    sumGp.innerText = num2
}

