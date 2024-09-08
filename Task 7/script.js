var loader = document.querySelector("#loader");
var h3 = document.querySelector("h3");
var button = document.querySelector("button");

var count = 0;
button.addEventListener("click", function(){
    abc();
    var int = setInterval(function() {
        if(count === 100){
            clearInterval(int);
            h3.style.opacity = "100%";
        }
        count++;
        loader.style.width = count + "%";
    }, 50)
})

function abc() {
    count = 0;
    h3.style.opacity = "0%";
}

