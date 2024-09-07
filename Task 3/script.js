var form = document.querySelector('form');
var h4 = document.querySelector('h4');
// method 1
// var inp1 = document.querySelector('#inp1');
// var inp2 = document.querySelector('#inp2');

// method 2
var inps = document.querySelectorAll('input[type="text"]');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    // method 1
    // if(inp1.value === '' || inp2.value === ''){
    //     h4.textContent = 'Error, some fields are blank';
    //     h4.style.color = 'red';
    // }
    // else {
    //     h4.textContent = 'Form submitted successfully';
    //     h4.style.color = 'green';
    // }

    // method 2
    // inps.forEach(function(inp){
    //     if(inp.value === ''){
    //         h4.textContent = 'Error, some fields are blank';
    //         h4.style.color ='red';
    //     }
    //     else {
    //             h4.textContent = 'Form submitted successfully';
    //             h4.style.color = 'green';
    //             inp.value = '';
    //     }
    // })

    // method 3
    for(var i = 0; i < inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = 'Error, some fields are blank';
            h4.style.color ='red';
            break;
        }

    }
});
