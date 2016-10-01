console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New VALue';
var img = document.getElementById('goku');

var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 50000;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50000);
   
};