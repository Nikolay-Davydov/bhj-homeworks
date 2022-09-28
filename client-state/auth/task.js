const signinBlock = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const xhr = new XMLHttpRequest();

signinButton.addEventListener('click', enter);
document.addEventListener("DOMContentLoaded", restoreLogin);

function restoreLogin() {
    let user_id = localStorage.getItem("user_id"); 
    if (user_id != null) {
        signinBlock.classList.remove('signin_active');
        sayHello(user_id);
    }
    else {
        signinBlock.classList.add('signin_active');
    }
}

function sayHello(user) {
    welcome.classList.add('welcome_active');
    // welcome.innerHTML = `Добро пожаловать, пользователь #
    // <span id="${user}">${user}</span>`;
    
    
    welcome.innerHTML = `Добро пожаловать, пользователь #<span id="${user}">${user}</span>
        <br><br>
        <button class="btn" id="logout__btn" onclick="localStorage.clear(); window.location.reload();">Выйти</button>`;
}

function enter(event) {
    event.preventDefault();

    // let formData = new FormData(document.forms[0]);
    let formData = new FormData(signinForm);
    
    // xhr.overrideMimeType("application/json");
    xhr.responseType = 'json';
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);    
    xhr.send(formData);
    xhr.onload = function() {   
        // if (xhr.readyState != 4) return;    
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            // let authJSON = JSON.parse(xhr.responseText);
            let authJSON = xhr.response;
            if (authJSON.success) {
                signinBlock.classList.remove('signin_active');
                sayHello(authJSON.user_id);
                localStorage.setItem("user_id", authJSON.user_id);
            }
            else {
                signinForm.reset();
                alert('Неверный логин/пароль!');
            }
        }
    }
}
