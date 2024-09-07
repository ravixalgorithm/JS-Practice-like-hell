var loader = document.querySelector("#loader");
var h3 = document.querySelector("h3");

var count = 0;
var int = setInterval(function() {
    if(count === 100){
        clearInterval(int);
        h3.style.opacity = "100%";
    }
    count++;
    loader.style.width = count + "%";
}, 100)
