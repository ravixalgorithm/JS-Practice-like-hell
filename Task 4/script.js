var add = document.querySelector('#add');
var remove = document.querySelector('#remove');
var inp = document.querySelector('input');
var ul = document.querySelector('ul');

var li;

add.addEventListener('click', function(){
    if(inp.value.trim() === '') {
        alert('Please enter a value');
        return;
    }
    else{
        li = document.createElement('li');
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = '';
    }
})

remove.addEventListener('click', function(){
    ul.removeChild(li);
})