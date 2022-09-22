const form = document.getElementById('form');
const url = 'https://netology-slow-rest.herokuapp.com/upload.php'

form.addEventListener('submit', event => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    const progress = document.getElementById('progress');
    xhr.upload.onloadstart = function() {   
        progress.value = 0.1
        function increase() {
            if(progress.value <= 0.9) {
                progress.value = progress.value + 0.1;
            }            
        }        
        setInterval(increase, 2000);
    }    
    xhr.upload.onload = function() {
        progress.value = 1.0;
    }    
xhr.send(formData);
event.preventDefault();
})

