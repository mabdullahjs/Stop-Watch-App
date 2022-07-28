var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hours = document.querySelector("#hours");
var i = 1;
var j = 1;
var k = 1;
var countSeconds;
function stopwatch() {
    countSeconds = setInterval(function () {
        seconds.innerHTML = i;
        i++;
        if (i === 61) {
            minutes.innerHTML = j++;
            i = 0;
            seconds.innerHTML = i;
            i++;
            if (j == 61) {
                j = 0;
                hours.innerHTML = k++;
                minutes.innerHTML = j;
                j++;
            }
        }
    }, 1000)
}
function reset() {
    i = 0;
    j = 0;
    k = 0;
    seconds.innerHTML = i ;
    hours.innerHTML = j ;
    minutes.innerHTML = k ;
}
function stop(){
    clearInterval(countSeconds);
}
// stopwatch()