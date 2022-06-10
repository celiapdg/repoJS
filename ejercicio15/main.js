const bien = document.getElementsByClassName("bien");
const mal = document.getElementsByClassName("mal");
const preguntaDiv = document.getElementsByClassName("preguntaDiv");

const result = document.getElementById("result");

const final = document.getElementById("final");

let pregunta = 0;

function hide() {
    preguntaDiv[pregunta].hidden = true;
    showResult();
    pregunta++;
    if (pregunta < preguntaDiv.length) {
        preguntaDiv[pregunta].hidden = false;
    };


}


function addPoint() {
    hide();
    switch (result.innerHTML) {
        case "0":
            result.innerHTML = "1";
            break;
        case "1":
            result.innerHTML = "2";
            break;
    }

}

function showResult() {
    final.hidden = false;
    btn5.hidden = false;
}

function again() {
    pregunta = 0;
    result.innerHTML = "0";
    preguntaDiv[pregunta].hidden = false;
    final.hidden = true;
    btn5.hidden = true;
}

for (let i = 0; i < bien.length; i++) {
    bien[i].addEventListener("click", addPoint);
};

for (let i = 0; i < mal.length; i++) {
    mal[i].addEventListener("click", hide);
};

btn5.addEventListener("click", again);
