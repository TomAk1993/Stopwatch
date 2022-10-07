
var seconds = 00;
var tens = 00;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById('seconds');
let start = document.getElementById('start');
let stopp = document.getElementById('stop');
let reset = document.getElementById('reset');
let interval;

function startTimer(){
    tens++;
    if(tens <9) {
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9) {
        appendTens.innerHTML = tens;
    }
    if(tens >99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens;
    }
    if(seconds > 9 ) {
        appendSeconds.innerHTML = seconds;
    }
}

start.onclick = function () {
    interval = setInterval(startTimer);
}

stopp.onclick = function () {
    clearInterval(interval);
}


reset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}