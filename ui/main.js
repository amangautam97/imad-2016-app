console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New VALue';
var img = document.getElementById('goku');
img.onclick = function() {
    img.style.marginLeft = '100px';
};