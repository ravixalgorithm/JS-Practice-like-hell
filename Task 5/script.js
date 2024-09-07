var start = document.querySelector("#start");
var reset = document.querySelector("#reset");
var h4 = document.querySelector('h4');

var interval;
var count;

start.addEventListener("click", function(){
    count = 0;
    interval = setInterval(function(){
        count++;
        h4.textContent = count;
    }, 1000);
})

reset.addEventListener("click", function(){
    clearInterval(interval);
    h4.textContent = "0";
})

