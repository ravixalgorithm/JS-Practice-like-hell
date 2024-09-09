var people = document.querySelector("#people");
var input = document.querySelector("input");

var data = [
    {name: "Harsh", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"},
    {name: "Ravi", src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"},
    {name: "Prince", src: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"},
    {name: "Shikhar", src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Harshita", src: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBnbGFzc2VzfGVufDB8fDB8fHww"},
]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
            </div>`
})
people.innerHTML = pers;

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.toLowerCase().includes(input.value.toLowerCase());
    })

    var newpers = "";
    matching.forEach(function(elem){
        newpers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
    })
    people.innerHTML = newpers;
})