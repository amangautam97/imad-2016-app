var button = document.getElementById('counter');

button.onclick= function() {
    
    var request = new XMLHttpRequet();
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200) {
                var counter = request.responeText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
   request.open('GET', 'http://amangautam97.imad.hasura-app.io/counter', true);
   request.send(null);
};