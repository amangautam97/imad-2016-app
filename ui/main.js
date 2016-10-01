console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New VALue';
var img = document.getElementById('goku');

var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 3;
    img.style.marginLeft = marginLeft + 'px';
}
var marginRight=0;
function moveLeft() {
    marginRight = marginRight + 3;
    img.style.marginRight = marginRight + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    var interval = setInterval(moveLeft, 60);
};