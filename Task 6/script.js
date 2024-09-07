var tabs = document.querySelectorAll('.tabs');
var h3 = document.querySelectorAll('.tabcontent');

h3[0].style.display = 'block';
h3[0].style.width = "50%";
tabs[0].style.border = '1px solid black';

tabs.forEach(function(tab, index){
    tab.addEventListener("click", function(){
        hideAllText();
        h3[index].style.display = 'block';
        h3[index].style.width = "50%";
        tabs[index].style.border = '1px solid black';
    })
})

function hideAllText(){
    h3.forEach(function(text){
        text.style.display = 'none';
        text.style.width = 0;
    })
    tabs.forEach(function(text){
        text.style.border = '1px solid transparent';
    })
}