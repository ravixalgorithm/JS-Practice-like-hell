var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var btn = document.querySelector('button');
btn.addEventListener('click', function(){
        var temp = img1.src;
        img1.src = img2.src;
        img2.src = temp;
})