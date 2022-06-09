const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const result = document.getElementById("result");

const final = document.getElementById("final");

// btn1.onclick = function () {
//     btn1.hidden = true;
//     btn2.hidden = true;
//     btn3.hidden = true;
//     btn4.hidden = true;
// };

function hide() {
    btn1.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    result.innerHTML = "0";
    showResult();
}



function addPoint() {
    hide();
    result.innerHTML = "1";
}

function showResult() {
    final.hidden = false;
    btn5.hidden = false;
}

function again() {
    btn1.hidden = false;
    btn2.hidden = false;
    btn3.hidden = false;
    btn4.hidden = false;
    final.hidden = true;
    btn5.hidden = true;
}

btn1.addEventListener("click", hide);
btn2.addEventListener("click", hide);
btn3.addEventListener("click", hide);
btn4.addEventListener("click", addPoint);
btn5.addEventListener("click", again);
